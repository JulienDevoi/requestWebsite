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

    return Response.json({ success: true, leadId: savedLeadId })
  } catch (error) {
    console.error('Exception in API route:', error)
    return Response.json(
      { success: false, error: error.message || 'Internal server error' },
      { status: 500 }
    )
  }
}
