import Hero from '../components/Hero.tsx'
import ComparisonCard from '../components/ComparisonCard.tsx'
import BenefitCard from '../components/BenefitCard.tsx'
import ActionCard from '../components/ActionCard.tsx'
import { benefits } from '../data/benefits.ts'
import { actions } from '../data/actions.tsx'

export default function HomePage() {
  return (
    <>
      <Hero />

      <div className="section problem-section" id="why">
        <div className="container">
          <h2>The Problem With Paint</h2>
          <div className="comparison">
            <ComparisonCard
              variant="bad"
              title="What We Have"
              imageSrc="/images/painted-bike-lanes-v3.png"
              imageAlt="Painted bike lane with no physical separation from traffic"
              items={[
                'Cars traveling 30+ mph inches away',
                'No physical protection',
                'Unsafe for children and families',
                'Discourages active transportation',
              ]}
            />
            <ComparisonCard
              variant="good"
              title="What We Need"
              imageSrc="/images/protected-bike-lanes-v3.png"
              imageAlt="Bike/pedestrian lane separated from traffic by grass and trees"
              items={[
                'Physically separated from traffic',
                'Safe for children, seniors, families',
                'Encourages healthy, active lifestyles',
                'Proven to increase property values',
              ]}
            />
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <h2>Why Separated Greenways Matter</h2>
          <p className="section-subtitle">Real greenways transform communities. Here's why South Nashville needs them.</p>
          <div className="benefits-grid">
            {benefits.map((benefit, i) => (
              <BenefitCard key={i} {...benefit} />
            ))}
          </div>
        </div>
      </div>

      <div className="section action-section" id="take-action">
        <div className="container">
          <h2>Take Action Today</h2>
          <p className="section-subtitle">The city has plans, but they're moving slowly. Let's work together to accelerate real greenway development.</p>
          <div className="action-cards">
            {actions.map((action) => (
              <ActionCard key={action.number} {...action} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
