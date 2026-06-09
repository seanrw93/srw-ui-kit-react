import type { Meta, StoryObj } from '@storybook/react'
import Card from '../components/Card/Card'

const meta: Meta<typeof Card> = {
  title: 'Containers/Card',
  component: Card,
  args: {
    hasImage: false,
  },
}
export default meta

type Story = StoryObj<typeof Card>

export const Playground: Story = {
  args: {
    children: (
      <>
        <p style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--light-muted)', marginBottom: '8px' }}>Section label</p>
        <h3 style={{ marginBottom: '8px' }}>Card title</h3>
        <p style={{ color: 'var(--light-body)' }}>Supporting text for the card.</p>
      </>
    ),
  },
}

export const Default: Story = {
  render: () => (
    <Card>
      <p style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--light-muted)', marginBottom: '8px' }}>Section label</p>
      <h3 style={{ marginBottom: '8px' }}>Card title goes here</h3>
      <p style={{ color: 'var(--light-body)' }}>Supporting text for the card. One or two lines works best.</p>
    </Card>
  ),
}

export const WithImage: Story = {
  render: () => (
    <Card hasImage imageSlot={<div style={{ height: '160px', background: 'linear-gradient(135deg, #2a2521 0%, #c8b89a44 100%)' }} />}>
      <p style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--light-muted)', marginBottom: '8px' }}>Image card</p>
      <h3 style={{ marginBottom: '8px' }}>Card with image</h3>
      <p style={{ color: 'var(--light-body)' }}>The image slot renders above the body via the imageSlot prop.</p>
    </Card>
  ),
}

export const Grid: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', maxWidth: '720px' }}>
      <Card>
        <p style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--light-muted)', marginBottom: '8px' }}>Section label</p>
        <h3 style={{ marginBottom: '8px' }}>First card</h3>
        <p style={{ color: 'var(--light-body)' }}>Supporting text for the card.</p>
      </Card>
      <Card>
        <p style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--light-muted)', marginBottom: '8px' }}>Section label</p>
        <h3 style={{ marginBottom: '8px' }}>Second card</h3>
        <p style={{ color: 'var(--light-body)' }}>A second card to show the layout in context.</p>
      </Card>
    </div>
  ),
}
