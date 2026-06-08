import Hero from '../../components/Hero/Hero'
import './HeroPage.scss'

export default function HeroPage() {
  return (
    <div className="page">
      <h1 className="page__title">Hero</h1>
      <p className="page__desc">
        Full-width hero with three animated image columns (float up/down), blurred ambient orbs, and a scroll-reveal
        text block. Colours stand in for the production images.
      </p>

      <section className="demo-block">
        <span className="demo-block__label">Full Replica</span>
        <div className="demo-block__content demo-block__content--flush">
          <Hero />
        </div>
      </section>
    </div>
  )
}
