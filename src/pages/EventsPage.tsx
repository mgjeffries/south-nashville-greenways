import Carousel from '../components/Carousel'

const eventPhotos = [
  { src: '/images/events/group-neighborhood.jpg', alt: 'Group bike ride through the neighborhood' },
  { src: '/images/events/group-antioch.jpg', alt: 'Group bike ride along Antioch' },
  { src: '/images/events/bikes-tacos.JPG', alt: 'Bikes and tacos after the ride' },
]

export default function EventsPage() {
  return (
    <>
      <div className="about-hero">
        <div className="container events-hero-inner">
          <div className="events-hero-text">
            <h1>Events</h1>
            <p>We're hosting easy, fun group bike rides during the summer of 2026!</p>
            <p>Everyone is welcome!</p>
          </div>
          <div className="events-hero-photos">
            <Carousel slides={eventPhotos} />
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="calendar-wrapper">
            <iframe
              src="https://calendar.google.com/calendar/embed?src=27405f8f527d9ab6ffdbfab8d48abfd023b748ae0b88df282f082a5f322e2171%40group.calendar.google.com&ctz=America%2FChicago"
              style={{ border: 0 }}
              width="800"
              height="600"
              frameBorder={0}
              scrolling="no"
              title="South Nashville Greenways Events Calendar"
            />
          </div>

          <div className="calendar-subscribe">
            <p>Want to see these events in your own calendar?</p>
            <a
              href="https://calendar.google.com/calendar/u/0?cid=Mjc0MDVmOGY1MjdkOWFiNmZmZGJmYWI4ZDQ4YWJmZDAyM2I3NDhhZTBiODhkZjI4MmYwODJhNWYzMjJlMjE3MUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t"
              className="cta-button"
            >
              Add to Google Calendar
            </a>
          </div>
        </div>
      </div>

    </>
  )
}
