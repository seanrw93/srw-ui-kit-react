import type { Meta, StoryObj } from '@storybook/react'
import Alert from '../components/Alert/Alert'

const meta: Meta<typeof Alert> = {
  title: 'Primitives/Alert',
  component: Alert,
  args: {
    variant: 'info',
    children: 'This is an alert message.',
  },
  argTypes: {
    variant: { control: 'select', options: ['info', 'success', 'warning', 'error'] },
  },
}
export default meta

type Story = StoryObj<typeof Alert>

export const Playground: Story = {}

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '560px' }}>
      <Alert variant="info">Account settings saved. Changes take effect on next page load.</Alert>
      <Alert variant="success">Payment confirmed. Receipt sent to your email.</Alert>
      <Alert variant="warning">Session expires in 10 minutes. Save your work.</Alert>
      <Alert variant="error">Couldn&rsquo;t save changes. Check your connection and try again.</Alert>
    </div>
  ),
}
