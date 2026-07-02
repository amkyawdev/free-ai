'use client'

export default function IconButtons() {
  const buttons = [
    { icon: 'bi-github', label: 'GitHub', href: '#' },
    { icon: 'bi-discord', label: 'Discord', href: '#' },
    { icon: 'bi-twitter-x', label: 'Twitter', href: '#' },
    { icon: 'bi-share', label: 'Share', href: '#' },
    { icon: 'bi-bookmark', label: 'Bookmark', href: '#' },
  ]

  return (
    <div className="icon-buttons">
      {buttons.map((btn, index) => (
        <button 
          key={index} 
          className="icon-btn" 
          title={btn.label}
          onClick={() => alert(`${btn.label} feature coming soon!`)}
        >
          <i className={`bi ${btn.icon}`}></i>
        </button>
      ))}
    </div>
  )
}
