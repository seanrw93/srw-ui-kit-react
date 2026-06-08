import Alert from '../../components/Alert/Alert'
import './AlertPage.scss'

export default function AlertPage() {
  return (
    <div className="page">
      <h1 className="page__title">Alert</h1>
      <p className="page__desc">Four semantic variants for feedback messages.</p>

      <section className="demo-block">
        <span className="demo-block__label">Variants</span>
        <div className="demo-block__content">
          <div className="alert-stack">
            <Alert variant="info">Account settings saved. Changes take effect on next page load.</Alert>
            <Alert variant="success">Payment confirmed. Receipt sent to your email.</Alert>
            <Alert variant="warning">Session expires in 10 minutes. Save your work.</Alert>
            <Alert variant="error">Couldn&rsquo;t save changes. Check your connection and try again.</Alert>
          </div>
        </div>
      </section>
    </div>
  )
}
