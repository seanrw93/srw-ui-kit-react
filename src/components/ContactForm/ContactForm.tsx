import { useState } from 'react'
import './ContactForm.scss'

type Status = 'idle' | 'sending' | 'success' | 'error'

const links = [
  { icon: '✉', label: 'hello@srw-dev.com', href: 'mailto:hello@srw-dev.com' },
  { icon: 'in', label: 'LinkedIn', href: '#' },
  { icon: 'gh', label: 'GitHub', href: '#' },
  { icon: '◷', label: 'Book a call on Calendly', href: '#' },
]

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [reqtype, setReqtype] = useState('')
  const [message, setMessage] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    await new Promise(r => setTimeout(r, 1200))
    setStatus('success')
  }

  function reset() {
    setName('')
    setEmail('')
    setReqtype('')
    setMessage('')
    setStatus('idle')
  }

  return (
    <div className="contact-inner">
      <div className="contact-info">
        <span className="section-label">Contact</span>
        <h2 className="section-title">Let&rsquo;s work together</h2>
        <p>Tell me about your project. I&rsquo;ll get back to you within 24h.</p>

        <div className="contact-links">
          {links.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="contact-link"
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
            >
              <div className="contact-link-icon" aria-hidden="true">{link.icon}</div>
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className="contact-form-wrap">
        {status !== 'success' ? (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="cf-name">Name</label>
              <input
                id="cf-name"
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Your name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="cf-email">Email</label>
              <input
                id="cf-email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="cf-type">Type of enquiry</label>
              <select
                id="cf-type"
                value={reqtype}
                onChange={e => setReqtype(e.target.value)}
                required
              >
                <option value="" disabled>Select an option</option>
                <option value="new-site">New website</option>
                <option value="ecommerce">E-commerce store</option>
                <option value="performance">Performance optimisation</option>
                <option value="freelance">Freelance / contract</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="cf-message">Message</label>
              <textarea
                id="cf-message"
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder="Describe your project or need..."
                required
              />
            </div>
            {status === 'error' && (
              <p className="form-error">Something went wrong. Try again or email directly.</p>
            )}
            <button
              type="submit"
              className="btn btn--outline btn--md form-submit"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>
          </form>
        ) : (
          <div className="form-success">
            <span className="form-success__icon">&#10003;</span>
            <p>Sent. I&rsquo;ll reply within 24h.</p>
            <button className="btn btn--ghost btn--sm" onClick={reset}>Send another</button>
          </div>
        )}
      </div>
    </div>
  )
}
