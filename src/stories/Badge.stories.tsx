import type { Meta, StoryObj } from '@storybook/react'
import Badge from '../components/Badge/Badge'

const meta: Meta<typeof Badge> = {
  title: 'Primitives/Badge',
  component: Badge,
  args: {
    children: 'Badge',
    variant: 'neutral',
    dot: false,
  },
  argTypes: {
    variant: { control: 'select', options: ['neutral', 'success', 'warning', 'error', 'info', 'dark'] },
  },
}
export default meta

type Story = StoryObj<typeof Badge>

export const Playground: Story = {}

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Badge variant="neutral">Neutral</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="dark">Dark</Badge>
    </div>
  ),
}

export const WithDot: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Badge variant="success" dot>Active</Badge>
      <Badge variant="warning" dot>Pending</Badge>
      <Badge variant="error" dot>Failed</Badge>
      <Badge variant="neutral" dot>Offline</Badge>
    </div>
  ),
}
