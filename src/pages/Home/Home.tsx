import { Link } from 'react-router-dom'
import './Home.scss'

interface NavItem { label: string; path: string; desc: string }
interface Section { category: string; items: NavItem[] }

const SECTIONS: Section[] = [
  {
    category: 'Primitives',
    items: [
      { label: 'Link', path: '/link', desc: 'Anchor element with the full button variant set' },
      { label: 'Button', path: '/button', desc: '4 variants, 3 sizes, loading & disabled states' },
      { label: 'Badge', path: '/badge', desc: '6 semantic variants with optional status dot' },
      { label: 'Input', path: '/input', desc: 'Label, helper, error, and disabled states' },
      { label: 'Alert', path: '/alert', desc: 'Info, success, warning, and error variants' },
    ],
  },
  {
    category: 'Containers',
    items: [
      { label: 'Card', path: '/card', desc: 'With and without image slot via children' },
      { label: 'Modal', path: '/modal', desc: 'Context-driven overlay with danger variant' },
      { label: 'Pricing Card', path: '/pricing', desc: 'Feature list, popular badge, bounce on hover' },
    ],
  },
  {
    category: 'Patterns',
    items: [
      { label: 'FAQ Accordion', path: '/faq', desc: 'Animated expand/collapse with IntersectionObserver' },
      { label: 'Contact Form', path: '/contact', desc: 'Two-column layout with status feedback' },
    ],
  },
  {
    category: 'Layout',
    items: [
      { label: 'Navbar', path: '/navbar', desc: 'Sticky nav with services submenu + mobile drawer' },
      { label: 'Hero', path: '/hero', desc: 'Animated image grid, ambient orbs, scroll reveal' },
      { label: 'Footer', path: '/footer', desc: 'Dark footer matching nav chrome' },
    ],
  },
]

export default function Home() {
  return (
    <div className="home">
      <header className="home-hero">
        <div className="home-hero__orb home-hero__orb--1" aria-hidden="true" />
        <div className="home-hero__orb home-hero__orb--2" aria-hidden="true" />
        <div className="home-hero__inner">
          <span className="home-hero__eyebrow">srw-dev &middot; UI Kit v1.0</span>
          <h1 className="home-hero__title">Design System</h1>
          <p className="home-hero__sub">
            A component library built directly from the srw-dev production site.
            Every token, animation, and interaction pulled straight from production.
          </p>
          <div className="home-hero__meta">
            <span className="home-hero__chip">React 18</span>
            <span className="home-hero__chip">Functional components</span>
            <span className="home-hero__chip">useState + Context</span>
            <span className="home-hero__chip">SCSS tokens</span>
          </div>
        </div>
      </header>

      <div className="home-body">
        {SECTIONS.map(section => (
          <section key={section.category} className="home-section">
            <h2 className="home-section__title">{section.category}</h2>
            <div className="home-section__grid">
              {section.items.map(item => (
                <Link key={item.path} className="home-card" to={item.path}>
                  <span className="home-card__label">{item.label}</span>
                  <p className="home-card__desc">{item.desc}</p>
                  <span className="home-card__arrow" aria-hidden="true">&rarr;</span>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
