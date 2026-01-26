/**
 * Webhook endpoint for signup events
 * Triggered after successful user signup
 * Sends only email information to the webhook
 */

// Use test webhook URL in development, production URL in production
const webhookUrl = process.env.NODE_ENV === 'development'
  ? 'https://notanothermarketer.app.n8n.cloud/webhook-test/2789d9ce-87a9-4508-9ca8-a797b62f661d'
  : 'https://notanothermarketer.app.n8n.cloud/webhook/2789d9ce-87a9-4508-9ca8-a797b62f661d'

/**
 * Trigger webhook with email information
 */
async function triggerSignupWebhook(email) {
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
