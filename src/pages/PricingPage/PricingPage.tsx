import PricingCard, { PricingPlan } from '../../components/PricingCard/PricingCard'
import Reveal from '../../components/Reveal/Reveal'
import './PricingPage.scss'

const PLANS: PricingPlan[] = [
  {
    name: 'Lorem Starter',
    price: 'from $49',
    note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.',
    features: [
      'Lorem ipsum dolor sit amet',
      'Consectetur adipiscing elit',
      'Sed do eiusmod tempor incididunt',
      'Ut labore et dolore magna aliqua',
      'Delivered in 7 days*',
    ],
    cta: 'Get started',
    popular: false,
  },
  {
    name: 'Lorem Pro',
    price: 'from $99',
    note: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris.',
    features: [
      'Quis nostrud exercitation ullamco',
      'Duis aute irure dolor in reprehenderit',
      'Ut enim ad minima veniam quis',
      'Excepteur sint occaecat cupidatat',
      'Sunt in culpa qui officia deserunt',
      'Delivered in 14 days*',
    ],
    cta: 'Get started',
    popular: true,
  },
  {
    name: 'Lorem Scale',
    price: 'from $199',
    note: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
    features: [
      'Nemo enim ipsam voluptatem quia',
      'Neque porro quisquam est qui dolorem',
      'Ut labore et dolore magnam aliquam',
      'Quis autem vel eum iure reprehenderit',
      'Delivered in 21 days*',
    ],
    cta: 'Get started',
    popular: false,
  },
]

export default function PricingPage() {
  return (
    <div className="page pricing-page">
      <h1 className="page__title">Pricing Card</h1>
      <p className="page__desc">
        Three-column grid. The popular card uses a dark surface and bounces on hover. Features get a green checkmark;
        price sits in a frosted-glass badge.
      </p>

      <section className="demo-block">
        <span className="demo-block__label">Three-tier pricing</span>
        <div className="demo-block__content demo-block__content--pricing">
          <div className="pricing-demo-grid">
            {PLANS.map((plan, i) => (
              <Reveal key={plan.name} delay={i * 70}>
                <PricingCard plan={plan} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
