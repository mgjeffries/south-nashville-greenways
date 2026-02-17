interface ComparisonCardProps {
  variant: 'bad' | 'good'
  title: string
  imageSrc: string
  imageAlt: string
  items: string[]
}

export default function ComparisonCard({ variant, title, imageSrc, imageAlt, items }: ComparisonCardProps) {
  const icon = variant === 'bad' ? '❌' : '✅'

  return (
    <div className={`comparison-item ${variant}`}>
      <h3>{icon} {title}</h3>
      <div className={`visual-mockup ${variant === 'bad' ? 'bad-design' : 'good-design'}`}>
        <img src={imageSrc} alt={imageAlt} />
      </div>
      <ul style={{ textAlign: 'left', marginTop: '20px', lineHeight: 2 }}>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
