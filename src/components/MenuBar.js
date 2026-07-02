'use client'

import { useState } from 'react'

export default function MenuBar() {
  const [activeItem, setActiveItem] = useState('chat')

  const menuItems = [
    { id: 'chat', label: 'Chat', icon: 'bi-chat-dots' },
    { id: 'explore', label: 'Explore', icon: 'bi-compass' },
    { id: 'models', label: 'Models', icon: 'bi-cpu' },
    { id: 'history', label: 'History', icon: 'bi-clock-history' },
    { id: 'settings', label: 'Settings', icon: 'bi-gear' },
  ]

  return (
    <nav className="menubar">
      {menuItems.map((item) => (
        <button
          key={item.id}
          className={`menubar-item ${activeItem === item.id ? 'active' : ''}`}
          onClick={() => setActiveItem(item.id)}
        >
          <i className={`bi ${item.icon}`}></i>
          <span>{item.label}</span>
        </button>
      ))}
    </nav>
  )
}
