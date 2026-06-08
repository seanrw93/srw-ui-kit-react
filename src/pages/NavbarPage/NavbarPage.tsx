import Navbar from '../../components/Navbar/Navbar'
import './NavbarPage.scss'

export default function NavbarPage() {
  return (
    <div className="page">
      <h1 className="page__title">Navbar</h1>
      <p className="page__desc">
        Fixed nav with a <code>Services</code> dropdown, availability badge, and mobile drawer. Hover Services for
        the desktop submenu; click the hamburger for mobile.
      </p>

      <section className="demo-block">
        <span className="demo-block__label">Full Replica</span>
        <div className="demo-block__content demo-block__content--flush">
          <Navbar />
        </div>
      </section>

      <section className="demo-block">
        <span className="demo-block__label">Tokens used</span>
        <div className="demo-block__content">
          <div className="token-list">
            <div className="token-row"><code>--dark-bg</code><span>Background with 85% opacity + backdrop-filter blur(14px)</span></div>
            <div className="token-row"><code>--dark-text</code><span>Logo and active link colour</span></div>
            <div className="token-row"><code>--accent</code><span>Logo accent span, badge, hover states</span></div>
            <div className="token-row"><code>--nav-height</code><span>64px — fixed height applied to the bar</span></div>
          </div>
        </div>
      </section>
    </div>
  )
}
