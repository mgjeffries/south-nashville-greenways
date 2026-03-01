import { useState, type ReactNode } from 'react'

interface LightboxProps {
  children: ReactNode
  src: string
  alt: string
}

export default function Lightbox({ children, src, alt }: LightboxProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="lightbox-trigger" onClick={() => setOpen(true)}>
        {children}
      </div>
      {open && (
        <div className="lightbox-overlay" onClick={() => setOpen(false)}>
          <img src={src} alt={alt} className="lightbox-image" />
        </div>
      )}
    </>
  )
}
