import ContactForm from '../../components/ContactForm/ContactForm'
import './ContactPage.scss'

export default function ContactPage() {
  return (
    <div className="page">
      <h1 className="page__title">Contact Form</h1>
      <p className="page__desc">
        Two-column layout: contact info and links on the left, form on the right. Submit triggers a simulated async
        send with idle, sending, and success states.
      </p>

      <section className="demo-block">
        <span className="demo-block__label">Full Replica</span>
        <div className="demo-block__content">
          <ContactForm />
        </div>
      </section>
    </div>
  )
}
