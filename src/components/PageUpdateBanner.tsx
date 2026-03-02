interface PageUpdate {
  date: string
  description: string
}

interface PageUpdateBannerProps {
  updates: PageUpdate[]
}

export default function PageUpdateBanner({ updates }: PageUpdateBannerProps) {
  return (
    <section className="page-updates">
      <h2>Page History</h2>
      <ul className="page-updates-list">
        {updates.map((update, i) => (
          <li key={i} className="page-update-item">
            <time className="page-update-date">{update.date}</time>
            <p className="page-update-description">{update.description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
