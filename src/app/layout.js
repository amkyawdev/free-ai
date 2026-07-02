import './globals.css'

export const metadata = {
  title: 'Free AI - Free AI Chat Assistant',
  description: 'Free AI powered by OpenRouter - Chat with NVIDIA Nemotron 3 Ultra model for free',
  keywords: 'free AI, AI chat, artificial intelligence, OpenRouter, NVIDIA Nemotron',
  authors: [{ name: 'Free AI' }],
  openGraph: {
    title: 'Free AI - Free AI Chat Assistant',
    description: 'Chat with AI for free using OpenRouter API',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
    iconAnimation: '/imgs/animations/run.svg',
  },
  manifest: '/manifest.json',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#667eea" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Free AI" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
