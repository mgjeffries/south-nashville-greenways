import { useState, type ReactNode } from 'react'

interface LightboxProps {
  children: ReactNode
  src: string
  alt: string
  caption?: string
}

export default function Lightbox({ children, src, alt, caption }: LightboxProps) {
  const [open, setOpen] = useState(false)

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
          <figure className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={src} alt={alt} className="lightbox-image" />
            {caption && <figcaption className="lightbox-caption">{caption}</figcaption>}
          </figure>
        </div>
      )}
    </>
  )
}
