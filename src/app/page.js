'use client'

import Header from '@/components/Header'
import AiHero from '@/components/AiHero'
import MenuBar from '@/components/MenuBar'
import IconButtons from '@/components/IconButtons'
import Footer from '@/components/Footer'
import { useState } from 'react'

export default function Home() {
  const [messages, setMessages] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const handleSendMessage = async (message) => {
    setIsLoading(true)
    setMessages(prev => [...prev, { role: 'user', content: message }])
    
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message })
      })
      
      const data = await response.json()
      
      if (data.error) {
        setMessages(prev => [...prev, { role: 'assistant', content: `Error: ${data.error}` }])
      } else {
        setMessages(prev => [...prev, { role: 'assistant', content: data.response }])
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, something went wrong. Please try again.' }])
    }
    
    setIsLoading(false)
  }

  return (
    <main className="app-container">
      <Header />
      <MenuBar />
      <AiHero 
        onSendMessage={handleSendMessage} 
        messages={messages} 
        isLoading={isLoading} 
      />
      <IconButtons />
      <Footer />
    </main>
  )
}
