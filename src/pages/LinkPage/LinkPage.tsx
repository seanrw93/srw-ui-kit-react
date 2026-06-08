import ALink from '../../components/ALink/ALink'
import './LinkPage.scss'

export default function LinkPage() {
  return (
    <div className="page">
      <h1 className="page__title">Link</h1>
      <p className="page__desc">
        Four variants plus dark surface counterparts, three sizes. Supports <code>disabled</code> and <code>external</code> states.
      </p>

      <section className="demo-block demo-block--split">
        <span className="demo-block__label">Variants</span>
        <div className="demo-block__content demo-block__content--row">
          <ALink variant="primary">Primary</ALink>
          <ALink variant="secondary">Secondary</ALink>
          <ALink variant="outline">Outline</ALink>
          <ALink variant="ghost">Ghost</ALink>
        </div>
        <div className="demo-block__content demo-block__content--row demo-block__content--dark">
          <ALink variant="accent-dark">Accent Dark</ALink>
        </div>
      </section>

      <section className="demo-block demo-block--split">
        <span className="demo-block__label">Sizes</span>
        <div className="demo-block__content demo-block__content--row demo-block__content--align-end">
          <ALink variant="primary" size="sm">Small</ALink>
          <ALink variant="primary" size="md">Medium</ALink>
          <ALink variant="primary" size="lg">Large</ALink>
        </div>
        <div className="demo-block__content demo-block__content--row demo-block__content--align-end demo-block__content--dark">
          <ALink variant="accent-dark" size="sm">Small</ALink>
          <ALink variant="accent-dark" size="md">Medium</ALink>
          <ALink variant="accent-dark" size="lg">Large</ALink>
        </div>
      </section>

      <section className="demo-block demo-block--split">
        <span className="demo-block__label">States</span>
        <div className="demo-block__content demo-block__content--row">
          <ALink variant="primary" disabled>Disabled</ALink>
          <ALink variant="primary" external>External</ALink>
          <ALink variant="outline" disabled>Outline Disabled</ALink>
        </div>
        <div className="demo-block__content demo-block__content--row demo-block__content--dark">
          <ALink variant="accent-dark" disabled>Disabled</ALink>
          <ALink variant="accent-dark" external>External</ALink>
        </div>
      </section>
    </div>
  )
}
