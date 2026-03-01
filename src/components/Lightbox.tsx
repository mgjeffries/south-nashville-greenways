import { useEffect, useState, type ReactNode } from 'react'

interface LightboxProps {
  children: ReactNode
  src: string
  alt: string
  caption?: string
}

export default function Lightbox({ children, src, alt, caption }: LightboxProps) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open])

  return (
    <>
      <figure className="lightbox-figure" onClick={() => setOpen(true)}>
        <div className="lightbox-trigger">
          {children}
        </div>
        {caption && <figcaption>{caption}</figcaption>}
      </figure>
      {open && (
        <div className="lightbox-overlay" onClick={() => setOpen(false)}>
          <figure className="lightbox-content" onClick={() => setOpen(false)}>
            <img src={src} alt={alt} className="lightbox-image" />
            {caption && <figcaption className="lightbox-caption">{caption}</figcaption>}
          </figure>
        </div>
      )}
    </>
  )
}
