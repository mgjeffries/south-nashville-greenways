import { useEffect, useState, type ReactNode } from 'react'
import { ExternalLink } from 'lucide-react'

interface LightboxProps {
  children: ReactNode
  src: string
  alt: string
  caption?: string
  sourceUrl?: string
}

export default function Lightbox({ children, src, alt, caption, sourceUrl }: LightboxProps) {
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
        {(caption || sourceUrl) && (
          <figcaption>
            {caption}{caption && sourceUrl && ' '}
            {sourceUrl && <a href={sourceUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>Source <ExternalLink size={12} /></a>}
          </figcaption>
        )}
      </figure>
      {open && (
        <div className="lightbox-overlay" onClick={() => setOpen(false)}>
          <figure className="lightbox-content" onClick={() => setOpen(false)}>
            <img src={src} alt={alt} className="lightbox-image" />
            {(caption || sourceUrl) && (
              <figcaption className="lightbox-caption">
                {caption}{caption && sourceUrl && ' '}
                {sourceUrl && <a href={sourceUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>Source <ExternalLink size={12} /></a>}
              </figcaption>
            )}
          </figure>
        </div>
      )}
    </>
  )
}
