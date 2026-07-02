const OPENROUTER_API_URL = 'https://openrouter.ai/api/v1/chat/completions'
const MODEL = 'qwen/qwen3.6-plus-preview'

export async function sendMessageToAI(message, apiKey) {
  if (!apiKey) {
    throw new Error('OpenRouter API key is not configured. Please add OPENROUTER_API_KEY to your .env.local file.')
  }

  try {
    const response = await fetch(OPENROUTER_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
        'HTTP-Referer': typeof window !== 'undefined' ? window.location.origin : '',
        'X-Title': 'Free AI',
      },
      body: JSON.stringify({
        model: MODEL,
        messages: [
          {
            role: 'user',
            content: message
          }
        ],
        max_tokens: 2048,
        temperature: 0.7,
        top_p: 0.9,
      })
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new Error(errorData.error?.message || `API request failed with status ${response.status}`)
    }

    const data = await response.json()
    
    if (!data.choices || !data.choices[0]?.message?.content) {
      throw new Error('Invalid response format from OpenRouter API')
    }

    return {
      response: data.choices[0].message.content,
      model: data.model,
      usage: data.usage,
    }
  } catch (error) {
    console.error('OpenRouter API Error:', error)
    throw error
  }
}

export function validateApiKey(apiKey) {
  if (!apiKey || typeof apiKey !== 'string') {
    return { valid: false, error: 'API key is required' }
  }
  
  if (apiKey.length < 10) {
    return { valid: false, error: 'API key appears to be too short' }
  }
  
  return { valid: true }
}
