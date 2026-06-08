import FaqAccordion from '../../components/FaqAccordion/FaqAccordion'
import './FaqPage.scss'

export default function FaqPage() {
  return (
    <div className="page">
      <h1 className="page__title">FAQ Accordion</h1>
      <p className="page__desc">
        Animated expand/collapse driven by a single <code>openIndex</code> state. The icon rotates 45° when open.
        Click any item to toggle; only one item can be open at a time.
      </p>

      <section className="demo-block">
        <span className="demo-block__label">Frequently asked questions</span>
        <div className="demo-block__content">
          <FaqAccordion />
        </div>
      </section>
    </div>
  )
}
