import Footer from '../../components/Footer/Footer'
import './FooterPage.scss'

export default function FooterPage() {
  return (
    <div className="page">
      <h1 className="page__title">Footer</h1>
      <p className="page__desc">
        Dark footer that matches the nav chrome. Address block on the left, external links on the right. Uses{' '}
        <code>--dark-bg</code> and the same rgba opacity scale as the nav border.
      </p>

      <section className="demo-block">
        <span className="demo-block__label">Full Replica</span>
        <div className="demo-block__content demo-block__content--flush">
          <Footer />
        </div>
      </section>
    </div>
  )
}
