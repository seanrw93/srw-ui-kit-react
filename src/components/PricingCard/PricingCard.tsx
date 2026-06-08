import './PricingCard.scss'

export interface PricingPlan {
  name: string
  price: string
  note: string
  features: string[]
  cta: string
  popular?: boolean
}

interface PricingCardProps {
  plan: PricingPlan
}

export default function PricingCard({ plan }: PricingCardProps) {
  return (
    <div className={`pricing-card${plan.popular ? ' pricing-card--popular' : ''}`}>
      {plan.popular && (
        <span className="pricing-card__badge">&#11088; Most popular</span>
      )}
      <div className="pricing-card__name">{plan.name}</div>
      <div className="pricing-card__price-wrap">
        <span className="pricing-card__price">{plan.price}</span>
      </div>
      <p className="pricing-card__note">{plan.note}</p>
      <ul className="pricing-card__features">
        {plan.features.map(f => (
          <li key={f}>
            <span className="pricing-card__check" aria-hidden="true">&#10003;</span>
            {f}
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        className={`btn btn--md pricing-card__cta${plan.popular ? ' btn--accent-dark' : ' btn--secondary'}`}
      >
        {plan.cta}
      </a>
    </div>
  )
}
