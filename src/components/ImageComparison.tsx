import { useState, useRef, useCallback } from 'react'
import { ChevronsLeftRight } from 'lucide-react'

interface ImageComparisonProps {
  leftSrc: string
  leftAlt: string
  rightSrc: string
  rightAlt: string
  caption?: string
}

export default function ImageComparison({ leftSrc, leftAlt, rightSrc, rightAlt, caption }: ImageComparisonProps) {
  const [position, setPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    setPosition((x / rect.width) * 100)
  }, [])

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging.current) return
    updatePosition(e.clientX)
  }, [updatePosition])

  const handleMouseUp = useCallback(() => {
    isDragging.current = false
    document.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('mouseup', handleMouseUp)
  }, [handleMouseMove])

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    isDragging.current = true
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
  }, [handleMouseMove, handleMouseUp])

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    e.preventDefault()
    updatePosition(e.touches[0].clientX)
  }, [updatePosition])

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    updatePosition(e.touches[0].clientX)
  }, [updatePosition])

  return (
    <figure className="image-comparison">
      <div className="image-comparison-container" ref={containerRef}>
        <img className="image-comparison-img" src={rightSrc} alt={rightAlt} />
        <img
          className="image-comparison-img image-comparison-overlay"
          src={leftSrc}
          alt={leftAlt}
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        />
        <div
          className="image-comparison-divider"
          style={{ left: `${position}%` }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div className="image-comparison-handle"><ChevronsLeftRight size={20} /></div>
        </div>
      </div>
      {caption && <figcaption className="image-comparison-caption">{caption}</figcaption>}
    </figure>
  )
}
