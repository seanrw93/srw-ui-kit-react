import type { Meta, StoryObj } from '@storybook/react'
import Button from '../components/Button/Button'
import { ModalProvider, useModal, ModalConfig } from '../context/ModalContext'
import Modal from '../components/Modal/Modal'

const meta: Meta = {
  title: 'Containers/Modal',
  args: {
    title: 'Confirm action',
    body: 'Are you sure you want to proceed?',
    confirmLabel: 'Confirm',
    danger: false,
  } as ModalConfig,
  decorators: [
    (Story) => (
      <ModalProvider>
        <Story />
        <Modal />
      </ModalProvider>
    ),
  ],
}
export default meta

type Story = StoryObj

function PlaygroundTrigger({ title, body, confirmLabel, danger }: ModalConfig) {
  const modal = useModal()
  return (
    <Button variant="primary" onClick={() => modal.open({ title, body, confirmLabel, danger })}>
      Open modal
    </Button>
  )
}

export const Playground: Story = {
  args: {
    danger: true
  },

  render: (args) => <PlaygroundTrigger {...(args as ModalConfig)} />
}

function DefaultTrigger() {
  const modal = useModal()
  return (
    <Button variant="primary" onClick={() => modal.open({ title: 'Confirm action', body: 'Are you sure you want to proceed?', confirmLabel: 'Confirm' })}>
      Open modal
    </Button>
  )
}

function DangerTrigger() {
  const modal = useModal()
  return (
    <Button variant="outline" onClick={() => modal.open({ title: 'Delete item', body: 'This will permanently delete the item.', confirmLabel: 'Delete', danger: true })}>
      Open danger modal
    </Button>
  )
}

export const Default: Story = {
  render: () => <DefaultTrigger />,
}

export const Danger: Story = {
  render: () => <DangerTrigger />,
}

export const BothVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px' }}>
      <DefaultTrigger />
      <DangerTrigger />
    </div>
  ),
}
