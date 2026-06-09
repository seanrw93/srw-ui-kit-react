import type { Meta, StoryObj } from '@storybook/react'
import Reveal from '../components/Reveal/Reveal'

const meta: Meta<typeof Reveal> = {
  title: 'Utility/Reveal',
  component: Reveal,
  argTypes: {
    from: { control: 'select', options: ['default', 'right'] },
    delay: { control: { type: 'number', min: 0, max: 1000, step: 50 } },
  },
}
export default meta

type Story = StoryObj<typeof Reveal>

export const Playground: Story = {
  args: { from: 'default', delay: 0 },
  render: (args) => (
    <Reveal key={JSON.stringify(args)} {...args}>
      <div style={{ padding: '32px', background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: 'var(--radius-md)' }}>
        <h3 style={{ marginBottom: '8px' }}>Reveal</h3>
        <p style={{ color: 'var(--light-body)' }}>Re-mount the story to replay the animation.</p>
      </div>
    </Reveal>
  ),
}

export const FadeIn: Story = {
  args: { from: 'default', delay: 0 },
  render: (args) => (
    <Reveal key={JSON.stringify(args)} {...args}>
      <div style={{ padding: '32px', background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: 'var(--radius-md)' }}>
        <h3 style={{ marginBottom: '8px' }}>Fade in</h3>
        <p style={{ color: 'var(--light-body)' }}>This element fades in when it enters the viewport. Re-mount the story to replay.</p>
      </div>
    </Reveal>
  ),
}

export const SlideFromRight: Story = {
  args: { from: 'right', delay: 0 },
  render: (args) => (
    <Reveal key={JSON.stringify(args)} {...args}>
      <div style={{ padding: '32px', background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: 'var(--radius-md)' }}>
        <h3 style={{ marginBottom: '8px' }}>Slide from right</h3>
        <p style={{ color: 'var(--light-body)' }}>Slides in from the right. Re-mount the story to replay.</p>
      </div>
    </Reveal>
  ),
}

export const StaggeredGrid: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
      {[0, 70, 140].map((delay) => (
        <Reveal key={delay} delay={delay}>
          <div style={{ padding: '24px', background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: 'var(--radius-md)' }}>
            <p style={{ color: 'var(--light-muted)', fontSize: '12px', marginBottom: '4px' }}>delay {delay}ms</p>
            <p style={{ color: 'var(--light-body)' }}>Staggered item</p>
          </div>
        </Reveal>
      ))}
    </div>
  ),
}
