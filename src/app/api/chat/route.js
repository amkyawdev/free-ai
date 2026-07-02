import { NextResponse } from 'next/server'
import { sendMessageToAI } from '@/utils/api'

export async function POST(request) {
  try {
    const { message } = await request.json()

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required and must be a string' },
        { status: 400 }
      )
    }

    const apiKey = process.env.OPENROUTER_API_KEY
    
    if (!apiKey) {
      return NextResponse.json(
        { error: 'OpenRouter API key is not configured. Please set OPENROUTER_API_KEY in your environment variables.' },
        { status: 500 }
      )
    }

    const result = await sendMessageToAI(message, apiKey)
    
    return NextResponse.json(result)
  } catch (error) {
    console.error('Chat API Error:', error)
    return NextResponse.json(
      { error: error.message || 'An unexpected error occurred' },
      { status: 500 }
    )
  }
}
