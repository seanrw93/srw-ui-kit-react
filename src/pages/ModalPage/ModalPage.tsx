import Button from '../../components/Button/Button'
import { useModal } from '../../context/ModalContext'
import './ModalPage.scss'

export default function ModalPage() {
  const modal = useModal()

  function openDefault() {
    modal.open({
      title: 'Confirm action',
      body: 'Are you sure you want to proceed?',
      confirmLabel: 'Confirm',
    })
  }

  function openDanger() {
    modal.open({
      title: 'Delete item',
      body: 'This will permanently delete the item.',
      confirmLabel: 'Delete',
      danger: true,
    })
  }

  return (
    <div className="page">
      <h1 className="page__title">Modal</h1>
      <p className="page__desc">
        Driven by <code>ModalContext</code>. Click the backdrop to close. Has a danger variant for destructive actions.
      </p>

      <section className="demo-block">
        <span className="demo-block__label">Trigger</span>
        <div className="demo-block__content demo-block__content--row">
          <Button variant="primary" onClick={openDefault}>Open modal</Button>
          <Button variant="outline" onClick={openDanger}>Open danger modal</Button>
        </div>
      </section>
    </div>
  )
}
