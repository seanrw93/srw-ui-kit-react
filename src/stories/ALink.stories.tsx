import type { Meta, StoryObj } from '@storybook/react'
import ALink from '../components/ALink/ALink'

const meta: Meta<typeof ALink> = {
  title: 'Primitives/ALink',
  component: ALink,
  args: {
    children: 'Link',
    variant: 'primary',
    size: 'md',
    href: '#',
    disabled: false,
    external: false,
  },
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'outline', 'ghost', 'accent-dark'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
}
export default meta

type Story = StoryObj<typeof ALink>

export const Playground: Story = {}

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
      <ALink variant="primary">Primary</ALink>
      <ALink variant="secondary">Secondary</ALink>
      <ALink variant="outline">Outline</ALink>
      <ALink variant="ghost">Ghost</ALink>
      <div style={{ background: '#0e0c0a', padding: '12px', borderRadius: '4px' }}>
        <ALink variant="accent-dark">Accent Dark</ALink>
      </div>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-end' }}>
      <ALink variant="primary" size="sm">Small</ALink>
      <ALink variant="primary" size="md">Medium</ALink>
      <ALink variant="primary" size="lg">Large</ALink>
    </div>
  ),
}

export const External: Story = {
  args: { external: true, children: 'External link' },
}

export const Disabled: Story = {
  args: { disabled: true, children: 'Disabled' },
}
