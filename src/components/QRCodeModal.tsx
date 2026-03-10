import { useEffect } from 'react'
import QRCode from 'react-qr-code'
import { X, Download } from 'lucide-react'

interface QRCodeModalProps {
  url: string
  onClose: () => void
}

export default function QRCodeModal({ url, onClose }: QRCodeModalProps) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  const handleDownload = () => {
    const svg = document.getElementById('qr-code-svg')
    if (!svg) return
    const serializer = new XMLSerializer()
    const svgStr = serializer.serializeToString(svg)
    const blob = new Blob([svgStr], { type: 'image/svg+xml' })
    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob)
    a.download = 'qr-code.svg'
    a.click()
    URL.revokeObjectURL(a.href)
  }

  return (
    <div className="qr-backdrop" onClick={onClose}>
      <div className="qr-modal" onClick={e => e.stopPropagation()}>
        <button className="qr-close" onClick={onClose} aria-label="Close">
          <X size={18} />
        </button>
        <p className="qr-label">Scan to share this page</p>
        <div className="qr-code-wrap">
          <QRCode id="qr-code-svg" value={url} size={200} />
        </div>
        <p className="qr-url">{url}</p>
        <button className="qr-download" onClick={handleDownload}>
          <Download size={14} /> Download QR Code
        </button>
      </div>
    </div>
  )
}
