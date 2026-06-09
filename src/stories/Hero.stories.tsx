import type { Meta, StoryObj } from '@storybook/react'
import Hero from '../components/Hero/Hero'

const meta: Meta<typeof Hero> = {
  title: 'Layout/Hero',
  component: Hero,
  parameters: {
    layout: 'fullscreen',
  },
}
export default meta

type Story = StoryObj<typeof Hero>

export const Default: Story = {}
