import { useState, useRef } from 'react'
import './Navbar.scss'

const services = ['Web Design', 'E-commerce', 'Performance & Speed', 'Technical SEO', 'Maintenance & Support']
const navLinks = [
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
  { label: 'Case Studies', href: '#cases' },
  { label: 'Contact', href: '#contact' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  function onServicesEnter() {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setServicesOpen(true)
  }

  function onServicesLeave() {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 150)
  }

  function toggleMobile() {
    setMobileOpen(prev => {
      if (prev) setMobileServicesOpen(false)
      return !prev
    })
  }

  function closeMobile() {
    setMobileOpen(false)
    setMobileServicesOpen(false)
  }

  return (
    <>
      <nav className="srw-nav" aria-label="Primary navigation">
        <div className="srw-nav__inner">
          <a className="srw-nav__logo" href="#">
            <span>srw</span>dev
          </a>

          <ul className="srw-nav__links">
            <li
              className="srw-nav__item--services"
              onMouseEnter={onServicesEnter}
              onMouseLeave={onServicesLeave}
            >
              <button className="srw-nav__services-trigger">
                Services
                <svg
                  className={`srw-nav__chevron${servicesOpen ? ' srw-nav__chevron--open' : ''}`}
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div className={`srw-nav__submenu${servicesOpen ? ' srw-nav__submenu--open' : ''}`}>
                {services.map(s => (
                  <a key={s} href="#" className="srw-nav__submenu-item">{s}</a>
                ))}
              </div>
            </li>
            {navLinks.map(link => (
              <li key={link.label}><a href={link.href}>{link.label}</a></li>
            ))}
          </ul>

          <div className="srw-nav__actions">
            <span className="srw-nav__badge">&#9679; Available for projects</span>
            <a href="#contact" className="btn btn--primary btn--sm">Work with me</a>
          </div>

          <button
            className={`srw-nav__hamburger${mobileOpen ? ' srw-nav__hamburger--open' : ''}`}
            onClick={toggleMobile}
            aria-expanded={mobileOpen}
            aria-label="Toggle menu"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </nav>

      <div className={`srw-nav__mobile${mobileOpen ? ' srw-nav__mobile--open' : ''}`}>
        <button className="srw-nav__mobile-services-btn" onClick={() => setMobileServicesOpen(v => !v)}>
          Services
          <svg
            className={`srw-nav__chevron${mobileServicesOpen ? ' srw-nav__chevron--open' : ''}`}
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            aria-hidden="true"
          >
            <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <div
          className="srw-nav__mobile-submenu"
          style={{ maxHeight: mobileServicesOpen ? '400px' : '0' }}
        >
          {services.map(s => (
            <a key={s} href="#" className="srw-nav__mobile-submenu-item" onClick={closeMobile}>{s}</a>
          ))}
        </div>
        {navLinks.map(link => (
          <a key={link.label} href={link.href} onClick={closeMobile}>{link.label}</a>
        ))}
        <a href="#contact" onClick={closeMobile} style={{ color: 'var(--accent)' }}>
          Work with me &rarr;
        </a>
      </div>
    </>
  )
}
