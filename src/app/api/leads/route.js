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
    const { leadId, data } = body

    if (leadId) {
      // Update existing lead
      const { data: updatedLead, error } = await supabaseAdmin
        .from('leads')
        .update({
          ...data,
          updated_at: new Date().toISOString(),
        })
        .eq('id', leadId)
        .select()
        .single()

      if (error) {
        console.error('Error updating lead:', error)
        return Response.json(
          { success: false, error: error.message },
          { status: 500 }
        )
      }

      return Response.json({ success: true, leadId: updatedLead.id })
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

      return Response.json({ success: true, leadId: newLead.id })
    }
  } catch (error) {
    console.error('Exception in API route:', error)
    return Response.json(
      { success: false, error: error.message || 'Internal server error' },
      { status: 500 }
    )
  }
}
