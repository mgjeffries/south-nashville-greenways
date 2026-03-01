interface MapOverlayProps {
  backgroundSrc: string
  backgroundAlt: string
  foregroundSrc: string
  foregroundAlt: string
  foregroundPosition: 'top' | 'bottom'
}

export default function MapOverlay({
  backgroundSrc,
  backgroundAlt,
  foregroundSrc,
  foregroundAlt,
  foregroundPosition,
}: MapOverlayProps) {
  return (
    <div className="map-overlay">
      <img
        className="map-overlay-background"
        src={backgroundSrc}
        alt={backgroundAlt}
      />
      <img
        className={`map-overlay-foreground map-overlay-foreground-${foregroundPosition}`}
        src={foregroundSrc}
        alt={foregroundAlt}
      />
    </div>
  )
}
