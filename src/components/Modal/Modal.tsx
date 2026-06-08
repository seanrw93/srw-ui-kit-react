import { useModal } from '../../context/ModalContext'
import './Modal.scss'

export default function Modal() {
  const { isOpen, config, close } = useModal()

  if (!isOpen) return null

  function onBackdropClick(e: React.MouseEvent<HTMLDivElement>) {
    if ((e.target as HTMLElement).classList.contains('modal-backdrop')) {
      close()
    }
  }

  return (
    <div
      className="modal-backdrop"
      onClick={onBackdropClick}
      role="dialog"
      aria-modal="true"
    >
      <div className={`modal${config.danger ? ' modal--danger' : ''}`}>
        <header className="modal__header">
          <h2 className="modal__title">{config.title}</h2>
          <button className="modal__close" onClick={close} aria-label="Close">✕</button>
        </header>
        <div className="modal__body">{config.body}</div>
        <footer className="modal__footer">
          <button className="btn btn--outline btn--md" onClick={close}>Cancel</button>
          <button
            className={`btn btn--md${config.danger ? ' btn--danger' : ' btn--primary'}`}
            onClick={close}
          >
            {config.confirmLabel || 'Confirm'}
          </button>
        </footer>
      </div>
    </div>
  )
}
