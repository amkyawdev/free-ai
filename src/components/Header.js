import Image from 'next/image'

export default function Header() {
  return (
    <header className="header">
      <Image 
        src="/imgs/animations/run.svg"
        alt="Free AI Logo"
        width={48}
        height={48}
        className="header-icon"
        priority
      />
      <div>
        <h1 className="header-title">Free AI</h1>
        <p className="header-subtitle">Powered by OpenRouter • qwen/qwen3.6-plus-preview</p>
      </div>
    </header>
  )
}
