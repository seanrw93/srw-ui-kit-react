import Reveal from '../Reveal/Reveal'
import './Hero.scss'

const GRID_COLORS = [
  'linear-gradient(135deg,#2a2521 0%,#3d3530 100%)',
  'linear-gradient(135deg,#1e1b18 0%,#c8b89a44 100%)',
  'linear-gradient(135deg,#3d3530 0%,#2a2521 100%)',
  'linear-gradient(135deg,#2a2521 0%,#b8a88a44 100%)',
  'linear-gradient(135deg,#1e1b18 0%,#3d3530 100%)',
  'linear-gradient(135deg,#3d3530 0%,#c8b89a33 100%)',
]

export default function Hero() {
  return (
    <div className="srw-hero-outer">
      <div className="srw-hero-orb srw-hero-orb--1" aria-hidden="true" />
      <div className="srw-hero-orb srw-hero-orb--2" aria-hidden="true" />
      <div className="srw-hero-orb srw-hero-orb--3" aria-hidden="true" />

      <div className="srw-hero-layout">
        <Reveal className="srw-hero">
          <span className="srw-hero__eyebrow">Available for projects &middot; Remote &amp; On-site</span>
          <h1>Your online presence,<br /><em>without the headache.</em></h1>
          <p className="srw-hero__subtitle">
            Brochure sites and e-commerce stores for small businesses.
            Fast, professional, easy to manage.
          </p>
          <div className="srw-hero__ctas">
            <a href="#contact" className="btn btn--primary btn--md">Work with me</a>
          </div>
        </Reveal>

        <div className="srw-hero-grid">
          <div className="srw-hero-grid__col srw-hero-grid__col--up">
            {[GRID_COLORS[0], GRID_COLORS[3]].map(c => (
              <div key={c} className="srw-hero-grid__item" style={{ background: c }} />
            ))}
          </div>
          <div className="srw-hero-grid__col srw-hero-grid__col--down">
            {[GRID_COLORS[1], GRID_COLORS[4]].map(c => (
              <div key={c} className="srw-hero-grid__item" style={{ background: c }} />
            ))}
          </div>
          <div className="srw-hero-grid__col srw-hero-grid__col--up">
            {[GRID_COLORS[2], GRID_COLORS[5]].map(c => (
              <div key={c} className="srw-hero-grid__item" style={{ background: c }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
