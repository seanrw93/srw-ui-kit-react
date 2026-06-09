import type { Meta, StoryObj } from '@storybook/react'
import FaqAccordion from '../components/FaqAccordion/FaqAccordion'

const meta: Meta<typeof FaqAccordion> = {
  title: 'Patterns/FaqAccordion',
  component: FaqAccordion,
  parameters: {
    layout: 'padded',
  },
}
export default meta

type Story = StoryObj<typeof FaqAccordion>

export const Default: Story = {}
