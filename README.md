<p align="center">
  <img src="public/imgs/animations/run.svg" alt="Free AI Logo" width="120" height="120"/>
</p>

<h1 align="center">Free AI</h1>

<p align="center">
  <a href="https://openrouter.ai">
    <img src="https://img.shields.io/badge/Powered%20by-OpenRouter-7C3AED?style=flat-square&logo=rocket" alt="OpenRouter"/>
  </a>
  <a href="https://nextjs.org">
    <img src="https://img.shields.io/badge/Framework-Next.js-000000?style=flat-square&logo=next.js" alt="Next.js"/>
  </a>
  <a href="https://vercel.com">
    <img src="https://img.shields.io/badge/Deploy-Vercel-000000?style=flat-square&logo=vercel" alt="Vercel"/>
  </a>
  <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" alt="License"/>
</p>

<p align="center">
  A modern, beautiful AI chat web application powered by OpenRouter API with the qwen/qwen3.6-plus-preview model.
</p>

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🤖 **Free AI Chat** | Chat with qwen/qwen3.6-plus-preview model at no cost |
| 🎨 **Modern UI** | Beautiful gradient design with smooth animations |
| 📱 **PWA Ready** | Install as a Progressive Web App on any device |
| ⚡ **Fast Performance** | Built with Next.js 14 App Router |
| 🔗 **Bootstrap Icons** | Clean, professional icon design throughout |
| 🌈 **Responsive Design** | Works perfectly on desktop, tablet, and mobile |
| 🔒 **Secure** | API keys stored safely in environment variables |

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ 
- **OpenRouter API Key** — [Get one free here](https://openrouter.ai/keys)

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/free-ai.git
cd free-ai

# Install dependencies
npm install

# Copy environment file
cp .env.local.example .env.local

# Add your OpenRouter API key to .env.local
# OPENROUTER_API_KEY=sk_or_your_key_here

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌐 Deploy to Vercel

### One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/free-ai)

### Manual Deploy

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variable:
   - **Name:** `OPENROUTER_API_KEY`
   - **Value:** Your OpenRouter API key
5. Click **Deploy**!

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 14** | React framework with App Router |
| **Custom CSS** | Modern styling with CSS Variables |
| **Bootstrap Icons** | Professional icon library (CDN) |
| **Inter Font** | Clean typography (Google Fonts) |
| **OpenRouter API** | AI model gateway |
| **Vercel** | Deployment & hosting |

---

## 📁 Project Structure

```
free-ai/
├── public/
│   ├── imgs/
│   │   └── animations/
│   │       └── run.svg           # 🎬 Animated AI logo
│   ├── favicon.ico
│   └── manifest.json             # 📱 PWA manifest
├── src/
│   ├── app/
│   │   ├── layout.js             # 🌐 Root layout
│   │   ├── page.js               # 🏠 Main page
│   │   ├── globals.css           # 🎨 Global styles
│   │   └── api/
│   │       └── chat/
│   │           └── route.js      # 🔌 Chat API endpoint
│   ├── components/
│   │   ├── Header.js             # 📌 App header
│   │   ├── MenuBar.js            # 📋 Navigation menu
│   │   ├── AiHero.js             # 💬 Chat interface
│   │   ├── IconButtons.js        # 🔘 Social buttons
│   │   └── Footer.js            # 📄 Footer
│   └── utils/
│       └── api.js                # 🔧 OpenRouter helper
├── .env.local                    # 🔐 Environment variables
├── .env.local.example            # 📝 Env template
├── vercel.json                   # ▲ Vercel config
├── next.config.js                # ⚙️ Next.js config
├── jsconfig.json                 # 📋 JS config
└── package.json
```

---

## 💡 Usage

1. **Enter** your question or prompt in the text area
2. **Click** "Send" button or press `Enter`
3. **Wait** for the AI to generate a response
4. **Continue** the conversation!

---

## 🔧 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `OPENROUTER_API_KEY` | Your OpenRouter API key | ✅ Yes |

Get your free API key at [openrouter.ai/keys](https://openrouter.ai/keys)

---

## 📄 License

MIT License — feel free to use and modify for your own projects.

---

<p align="center">
  Built with ❤️ using Next.js and OpenRouter
</p> 
