'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function AiHero({ onSendMessage, messages, isLoading }) {
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim() && !isLoading) {
      onSendMessage(input.trim())
      setInput('')
    }
  }

  return (
    <section className="ai-hero">
      <div className="chat-container">
        {messages.length === 0 ? (
          <div className="empty-state">
            <Image 
              src="/imgs/animations/run.svg"
              alt="AI Assistant"
              width={80}
              height={80}
              style={{ opacity: 0.5 }}
            />
            <p>Start a conversation with Free AI</p>
            <p style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>
              Ask me anything - I&apos;m powered by qwen/qwen3.6-plus-preview
            </p>
          </div>
        ) : (
          <>
            {messages.map((message, index) => (
              <div key={index} className={`chat-message ${message.role}`}>
                <div className="chat-message-avatar">
                  {message.role === 'user' ? (
                    <i className="bi bi-person-fill" style={{ color: 'white' }}></i>
                  ) : (
                    <Image 
                      src="/imgs/animations/run.svg"
                      alt="AI"
                      width={36}
                      height={36}
                      style={{ borderRadius: '50%' }}
                    />
                  )}
                </div>
                <div className="chat-message-content">
                  {message.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="loading-indicator">
                <div className="loading-dots">
                  <div className="loading-dot"></div>
                  <div className="loading-dot"></div>
                  <div className="loading-dot"></div>
                </div>
                <span>AI is thinking...</span>
              </div>
            )}
          </>
        )}
      </div>

      <form className="prompt-area" onSubmit={handleSubmit}>
        <textarea
          className="prompt-textarea"
          placeholder="Type your message here... (e.g., 'Write a poem about artificial intelligence')"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={isLoading}
        />
        <button 
          type="submit" 
          className="send-button"
          disabled={!input.trim() || isLoading}
        >
          <i className="bi bi-send-fill"></i>
          Send
        </button>
      </form>
    </section>
  )
}
