import './Footer.scss'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="srw-footer">
      <div className="srw-footer__inner">
        <address style={{ fontStyle: 'normal' }}>
          <div className="srw-footer__brand">Sean Roennau-Wergen</div>
          <div className="srw-footer__tagline">Freelance Web Developer &amp; Web Optimisation Expert</div>
          <div className="srw-footer__tagline">
            London &middot; <a href="mailto:hello@srw-dev.com">hello@srw-dev.com</a>
          </div>
          <div className="srw-footer__copy">&copy; {year} Sean Roennau-Wergen</div>
        </address>
        <div className="srw-footer__links">
          <a href="#" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="#" target="_blank" rel="noreferrer">GitHub</a>
          <a href="#" target="_blank" rel="noreferrer">Calendly</a>
          <a href="#">Legal</a>
          <a href="#">Privacy</a>
        </div>
      </div>
    </footer>
  )
}
