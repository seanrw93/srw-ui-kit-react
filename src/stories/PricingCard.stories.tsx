import type { Meta, StoryObj } from '@storybook/react'
import PricingCard, { PricingPlan } from '../components/PricingCard/PricingCard'

const meta: Meta<typeof PricingCard> = {
  title: 'Containers/PricingCard',
  component: PricingCard,
  args: {
    plan: {
      name: 'Starter',
      price: 'from £499',
      note: 'A clean, fast brochure site for small businesses.',
      features: ['Up to 5 pages', 'Mobile responsive', 'SEO foundations', 'Handover session', 'Delivered in 7 days*'],
      cta: 'Get started',
      popular: false,
    },
  },
}
export default meta

type Story = StoryObj<typeof PricingCard>

export const Playground: Story = {}

const starterPlan: PricingPlan = {
  name: 'Starter',
  price: 'from £499',
  note: 'A clean, fast brochure site for small businesses.',
  features: ['Up to 5 pages', 'Mobile responsive', 'SEO foundations', 'Handover session', 'Delivered in 7 days*'],
  cta: 'Get started',
}

const proPlan: PricingPlan = {
  name: 'Pro',
  price: 'from £899',
  note: 'A full e-commerce store, ready to sell from day one.',
  features: ['Unlimited products', 'Stripe payments', 'Inventory management', 'SEO foundations', 'Handover session', 'Delivered in 14 days*'],
  cta: 'Get started',
  popular: true,
}

const scalePlan: PricingPlan = {
  name: 'Scale',
  price: 'from £1,499',
  note: 'Performance-focused build for growing businesses.',
  features: ['Everything in Pro', 'Performance audit', 'Core Web Vitals pass', 'Analytics setup', 'Delivered in 21 days*'],
  cta: 'Get started',
}

export const Default: Story = {
  render: () => <PricingCard plan={starterPlan} />,
}

export const Popular: Story = {
  render: () => <PricingCard plan={proPlan} />,
}

export const ThreeTier: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', alignItems: 'start', maxWidth: '960px' }}>
      <PricingCard plan={starterPlan} />
      <PricingCard plan={proPlan} />
      <PricingCard plan={scalePlan} />
    </div>
  ),
}
