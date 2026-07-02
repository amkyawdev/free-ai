import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="footer">
      <div className="wpa-badge">
        <Image 
          src="/imgs/animations/run.svg"
          alt="PWA"
          width={18}
          height={18}
        />
        <span>Progressive Web App</span>
      </div>
      <p className="build-info">
        Free AI v1.0.0 • Built with Next.js • {currentYear}
      </p>
    </footer>
  )
}
