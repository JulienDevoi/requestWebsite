'use client'

const LEAD_ID_KEY = 'onboarding_lead_id'

/**
 * Get or create a lead ID from localStorage
 */
function getLeadId() {
  if (typeof window === 'undefined') return null
  return localStorage.getItem(LEAD_ID_KEY)
}

/**
 * Save lead ID to localStorage
 */
function saveLeadId(leadId) {
  if (typeof window === 'undefined') return
  localStorage.setItem(LEAD_ID_KEY, leadId)
}

/**
 * Clear lead ID from localStorage
 */
export function clearLeadId() {
  if (typeof window === 'undefined') return
  localStorage.removeItem(LEAD_ID_KEY)
}

/**
 * Create a new lead with email after signup
 * @param {string} email - The user's email
 * @returns {Promise<{success: boolean, leadId: string|null, error: Error|null}>}
 */
export async function createLead(email) {
  try {
    // Call our secure API route to create a new lead with email
    const response = await fetch('/api/leads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        leadId: null, // No existing lead ID - create new
        data: {
          email,
        },
        step: 'signup', // Special step to indicate this is from signup
      }),
    })

    const result = await response.json()

    if (!result.success) {
      console.error('Error creating lead:', result.error)
      return { 
        success: false, 
        leadId: null, 
        error: new Error(result.error || 'Failed to create lead') 
      }
    }

    // Save the lead ID to localStorage
    if (result.leadId) {
      saveLeadId(result.leadId)
    }

    console.log('Successfully created lead with ID:', result.leadId)
    return { success: true, leadId: result.leadId, error: null }
  } catch (error) {
    console.error('Exception creating lead:', error)
    return { 
      success: false, 
      leadId: null, 
      error: error instanceof Error ? error : new Error(String(error)) 
    }
  }
}

/**
 * Save or update a lead in the database via secure API route
 * @param {Object} data - The lead data to save
 * @param {string} step - The current step (e.g., 'step1', 'step2', etc.)
 * @returns {Promise<{success: boolean, leadId: string|null, error: Error|null}>}
 */
export async function saveLead(data, step) {
  try {
    const existingLeadId = getLeadId()

    // Call our secure API route
    const response = await fetch('/api/leads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        leadId: existingLeadId,
        data,
        step, // Include step so API route knows when to trigger webhook
      }),
    })

    const result = await response.json()

    if (!result.success) {
      console.error('Error saving lead:', result.error)
      return { 
        success: false, 
        leadId: null, 
        error: new Error(result.error || 'Failed to save lead') 
      }
    }

    // Save the lead ID to localStorage if it's a new lead
    if (!existingLeadId && result.leadId) {
      saveLeadId(result.leadId)
    }

    console.log('Successfully saved lead with ID:', result.leadId)
    return { success: true, leadId: result.leadId, error: null }
  } catch (error) {
    console.error('Exception saving lead:', error)
    return { 
      success: false, 
      leadId: null, 
      error: error instanceof Error ? error : new Error(String(error)) 
    }
  }
}
