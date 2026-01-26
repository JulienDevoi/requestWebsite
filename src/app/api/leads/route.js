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

export async function POST(request) {
  try {
    const body = await request.json()
    const { leadId, data, step } = body

    // Validate input
    if (!data || typeof data !== 'object') {
      return Response.json(
        { success: false, error: 'Invalid data: data must be an object' },
        { status: 400 }
      )
    }

    // Validate leadId format if provided (should be UUID)
    if (leadId && typeof leadId !== 'string') {
      return Response.json(
        { success: false, error: 'Invalid leadId: must be a string' },
        { status: 400 }
      )
    }

    // Validate step if provided
    if (step && typeof step !== 'string') {
      return Response.json(
        { success: false, error: 'Invalid step: must be a string' },
        { status: 400 }
      )
    }

    // Sanitize data - only allow expected fields
    const allowedFields = [
      'email',
      'step1_venture_funding',
      'step2_employee_count',
      'step3_corporate_cards_spend',
      'step4_stablecoin_volume',
      'step5_company_name',
      'step5_company_website',
    ]
    
    const sanitizedData = {}
    for (const [key, value] of Object.entries(data)) {
      if (allowedFields.includes(key)) {
        // Ensure values are strings and not too long (prevent abuse)
        if (typeof value === 'string' && value.length <= 1000) {
          sanitizedData[key] = value
        }
      }
    }

    // Ensure we have at least one field to save
    if (Object.keys(sanitizedData).length === 0) {
      return Response.json(
        { success: false, error: 'No valid data fields provided' },
        { status: 400 }
      )
    }

    let savedLeadId = null

    if (leadId) {
      // Try to update existing lead
      const { data: updatedLeads, error: updateError } = await supabaseAdmin
        .from('leads')
        .update({
          ...sanitizedData,
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
            ...sanitizedData,
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
          ...sanitizedData,
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

    return Response.json({ success: true, leadId: savedLeadId })
  } catch (error) {
    console.error('Exception in API route:', error)
    return Response.json(
      { success: false, error: error.message || 'Internal server error' },
      { status: 500 }
    )
  }
}
