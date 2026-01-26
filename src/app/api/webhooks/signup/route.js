/**
 * Webhook endpoint for signup events
 * Triggered after successful user signup
 * Sends only email information to the webhook
 */

// Get webhook URL from environment variables
// Use test webhook URL in development, production URL in production
const webhookUrl = process.env.NODE_ENV === 'development'
  ? process.env.WEBHOOK_SIGNUP_URL_TEST
  : process.env.WEBHOOK_SIGNUP_URL

if (!webhookUrl) {
  console.error('Webhook URL is missing. Please set WEBHOOK_SIGNUP_URL (production) or WEBHOOK_SIGNUP_URL_TEST (development) in your environment variables.')
}

/**
 * Trigger webhook with email information
 */
async function triggerSignupWebhook(email) {
  if (!webhookUrl) {
    console.error('Cannot trigger webhook: URL is not configured')
    return false
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
      }),
    })

    if (!response.ok) {
      console.error('Webhook error:', response.status, response.statusText)
      return false
    }

    return true
  } catch (error) {
    console.error('Webhook failed:', error.message)
    return false
  }
}

export async function POST(request) {
  try {
    const body = await request.json()
    const { email } = body

    // Validate email
    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return Response.json(
        { success: false, error: 'Valid email is required' },
        { status: 400 }
      )
    }

    // Trigger webhook (fire and forget - don't block the response)
    triggerSignupWebhook(email).catch((error) => {
      console.error('Error triggering signup webhook:', error)
    })

    // Return success immediately (webhook is async)
    return Response.json({ success: true })
  } catch (error) {
    console.error('Exception in signup webhook route:', error)
    return Response.json(
      { success: false, error: error.message || 'Internal server error' },
      { status: 500 }
    )
  }
}
