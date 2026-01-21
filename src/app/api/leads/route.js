import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceKey) {
  throw new Error('Missing Supabase environment variables')
}

// Create admin client with service role key (server-side only)
const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

/**
 * Trigger webhook for step5 completion
 */
async function triggerWebhook(data) {
  // Use explicit environment variable or fallback to NODE_ENV
  // Default to production webhook if not explicitly development
  const isLocal = process.env.NODE_ENV === 'development' || process.env.NEXT_PUBLIC_ENV === 'development'
  const webhookUrl = isLocal
    ? 'https://notanothermarketer.app.n8n.cloud/webhook-test/2789d9ce-87a9-4508-9ca8-a797b62f661d'
    : 'https://notanothermarketer.app.n8n.cloud/webhook/2789d9ce-87a9-4508-9ca8-a797b62f661d'

  console.log('Triggering webhook:', {
    environment: process.env.NODE_ENV,
    isLocal,
    webhookUrl,
    data,
  })

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      console.error('Webhook returned non-OK status:', {
        status: response.status,
        statusText: response.statusText,
        url: webhookUrl,
      })
    } else {
      console.log('Webhook triggered successfully:', {
        status: response.status,
        url: webhookUrl,
      })
    }
  } catch (error) {
    // Log webhook error but don't block the save operation
    console.error('Error triggering webhook:', {
      error: error.message,
      stack: error.stack,
      url: webhookUrl,
    })
  }
}

export async function POST(request) {
  try {
    const body = await request.json()
    const { leadId, data, step } = body

    let savedLeadId = null

    if (leadId) {
      // Try to update existing lead
      const { data: updatedLeads, error: updateError } = await supabaseAdmin
        .from('leads')
        .update({
          ...data,
          updated_at: new Date().toISOString(),
        })
        .eq('id', leadId)
        .select()

      if (updateError) {
        console.error('Error updating lead:', updateError)
        return Response.json(
          { success: false, error: updateError.message },
          { status: 500 }
        )
      }

      // If no rows were updated, the lead doesn't exist - create it
      if (!updatedLeads || updatedLeads.length === 0) {
        const { data: newLead, error: insertError } = await supabaseAdmin
          .from('leads')
          .insert({
            id: leadId, // Use the existing leadId
            ...data,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          })
          .select()
          .single()

        if (insertError) {
          console.error('Error creating lead with existing ID:', insertError)
          return Response.json(
            { success: false, error: insertError.message },
            { status: 500 }
          )
        }

        savedLeadId = newLead.id
      } else {
        savedLeadId = updatedLeads[0].id
      }
    } else {
      // Create new lead
      const { data: newLead, error } = await supabaseAdmin
        .from('leads')
        .insert({
          ...data,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        })
        .select()
        .single()

      if (error) {
        console.error('Error creating lead:', error)
        return Response.json(
          { success: false, error: error.message },
          { status: 500 }
        )
      }

      savedLeadId = newLead.id
    }

    // Trigger webhook for step5 (only when step5 data is being saved)
    if (step === 'step5' && data.first_name && data.last_name && data.company_name && data.linkedin_url) {
      console.log('Step5 detected, triggering webhook with data:', {
        step,
        hasFirstName: !!data.first_name,
        hasLastName: !!data.last_name,
        hasCompanyName: !!data.company_name,
        hasLinkedInUrl: !!data.linkedin_url,
      })
      await triggerWebhook({
        first_name: data.first_name,
        last_name: data.last_name,
        company_name: data.company_name,
        linkedin_url: data.linkedin_url,
      })
    } else {
      console.log('Webhook not triggered:', {
        step,
        hasFirstName: !!data.first_name,
        hasLastName: !!data.last_name,
        hasCompanyName: !!data.company_name,
        hasLinkedInUrl: !!data.linkedin_url,
      })
    }

    return Response.json({ success: true, leadId: savedLeadId })
  } catch (error) {
    console.error('Exception in API route:', error)
    return Response.json(
      { success: false, error: error.message || 'Internal server error' },
      { status: 500 }
    )
  }
}
