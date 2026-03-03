import { useState } from 'react'
import { Link2, Check } from 'lucide-react'

export default function ShareButton() {
  const [copied, setCopied] = useState(false)

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
    } catch {
      const textarea = document.createElement('textarea')
      textarea.value = window.location.href
      textarea.style.position = 'fixed'
      textarea.style.opacity = '0'
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button className="cta-button share-btn" onClick={handleClick}>
      {copied ? <><Check size={16} /> Copied!</> : <><Link2 size={16} /> Copy Link</>}
    </button>
  )
}
