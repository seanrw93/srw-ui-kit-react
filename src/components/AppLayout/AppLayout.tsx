import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'
import Modal from '../Modal/Modal'
import './AppLayout.scss'

interface NavItem { label: string; path: string }
interface NavCategory { label: string; items: NavItem[] }

const NAV: NavCategory[] = [
  {
    label: 'Overview',
    items: [{ label: 'Home', path: '/home' }],
  },
  {
    label: 'Primitives',
    items: [
      { label: 'Link', path: '/link' },
      { label: 'Button', path: '/button' },
      { label: 'Badge', path: '/badge' },
      { label: 'Input', path: '/input' },
      { label: 'Alert', path: '/alert' },
    ],
  },
  {
    label: 'Containers',
    items: [
      { label: 'Card', path: '/card' },
      { label: 'Modal', path: '/modal' },
      { label: 'Pricing Card', path: '/pricing' },
    ],
  },
  {
    label: 'Patterns',
    items: [
      { label: 'FAQ Accordion', path: '/faq' },
      { label: 'Contact Form', path: '/contact' },
    ],
  },
  {
    label: 'Layout',
    items: [
      { label: 'Navbar', path: '/navbar' },
      { label: 'Hero', path: '/hero' },
      { label: 'Footer', path: '/footer' },
    ],
  },
]

export default function AppLayout() {
  const { isDark, toggle } = useTheme()
  const [openCategories, setOpenCategories] = useState<Set<string>>(
    new Set(NAV.map(c => c.label)),
  )
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  function toggleCategory(label: string) {
    setOpenCategories(prev => {
      const next = new Set(prev)
      next.has(label) ? next.delete(label) : next.add(label)
      return next
    })
  }

  function closeMobileNav() {
    setMobileNavOpen(false)
  }

  return (
    <>
      <header className="topbar">
        <span className="topbar__logo">
          srw-dev <span className="topbar__logo-sub">UI Kit</span>
        </span>
        <div className="topbar__actions">
          <button
            className="topbar__theme"
            onClick={toggle}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? '☀' : '◑'}
          </button>
          <button
            className={`topbar__hamburger${mobileNavOpen ? ' topbar__hamburger--open' : ''}`}
            onClick={() => setMobileNavOpen(v => !v)}
            aria-expanded={mobileNavOpen}
            aria-label="Toggle navigation"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </header>

      {mobileNavOpen && (
        <div className="nav-backdrop" onClick={closeMobileNav} aria-hidden="true" />
      )}

      <div className="shell">
        <aside className={`sidebar${mobileNavOpen ? ' sidebar--open' : ''}`}>
          <div className="sidebar__brand">
            <span className="sidebar__logo">srw-dev</span>
            <span className="sidebar__subtitle">UI Kit &middot; v1.0</span>
          </div>

          <nav className="sidebar__nav" aria-label="Components">
            {NAV.map(cat => (
              <div key={cat.label} className="sidebar__category">
                <button
                  className="sidebar__category-toggle"
                  onClick={() => toggleCategory(cat.label)}
                  aria-expanded={openCategories.has(cat.label)}
                >
                  <span>{cat.label}</span>
                  <svg
                    className={`sidebar__category-chevron${openCategories.has(cat.label) ? ' sidebar__category-chevron--open' : ''}`}
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M1 1l4 4 4-4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <div
                  className="sidebar__items"
                  style={{ maxHeight: openCategories.has(cat.label) ? `${cat.items.length * 38}px` : '0' }}
                >
                  {cat.items.map(item => (
                    <NavLink
                      key={item.path}
                      className={({ isActive }) => 'sidebar__link' + (isActive ? ' active' : '')}
                      to={item.path}
                      onClick={closeMobileNav}
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            ))}
          </nav>

          <div className="sidebar__footer">
            <button
              className="theme-toggle"
              onClick={toggle}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <span className="theme-toggle__icon" aria-hidden="true">
                {isDark ? '☀' : '◑'}
              </span>
              <span className="theme-toggle__label">{isDark ? 'Light mode' : 'Dark mode'}</span>
            </button>
          </div>
        </aside>

        <main className="main">
          <Outlet />
        </main>
      </div>

      <Modal />
    </>
  )
}
