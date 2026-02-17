import type { ReactNode } from 'react'

interface ActionCardProps {
  number: number
  title: string
  description?: string
  footer: ReactNode
}

export default function ActionCard({ number, title, description, footer }: ActionCardProps) {
  return (
    <div className="action-card">
      <div className="action-number">{number}</div>
      <h3>{title}</h3>
      {description && <p>{description}</p>}
      <div className="card-footer">
        {footer}
      </div>
    </div>
  )
}
