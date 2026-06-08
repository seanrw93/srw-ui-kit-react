import Button from '../../components/Button/Button'
import './ButtonPage.scss'

export default function ButtonPage() {
  return (
    <div className="page">
      <h1 className="page__title">Button</h1>
      <p className="page__desc">Four variants, three sizes, loading and disabled states.</p>

      <section className="demo-block demo-block--split">
        <span className="demo-block__label">Variants</span>
        <div className="demo-block__content demo-block__content--row">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
        <div className="demo-block__content demo-block__content--row demo-block__content--dark">
          <Button variant="accent-dark">Accent Dark</Button>
        </div>
      </section>

      <section className="demo-block demo-block--split">
        <span className="demo-block__label">Sizes</span>
        <div className="demo-block__content demo-block__content--row demo-block__content--align-end">
          <Button variant="primary" size="sm">Small</Button>
          <Button variant="primary" size="md">Medium</Button>
          <Button variant="primary" size="lg">Large</Button>
        </div>
        <div className="demo-block__content demo-block__content--row demo-block__content--align-end demo-block__content--dark">
          <Button variant="accent-dark" size="sm">Small</Button>
          <Button variant="accent-dark" size="md">Medium</Button>
          <Button variant="accent-dark" size="lg">Large</Button>
        </div>
      </section>

      <section className="demo-block">
        <span className="demo-block__label">States</span>
        <div className="demo-block__content demo-block__content--row">
          <Button variant="primary" disabled>Disabled</Button>
          <Button variant="primary" loading>Loading</Button>
          <Button variant="outline" disabled>Outline Disabled</Button>
        </div>
        <div className="demo-block__content demo-block__content--row demo-block__content--dark">
          <Button variant="accent-dark" disabled>Disabled</Button>
          <Button variant="accent-dark" loading>Loading</Button>
        </div>
      </section>
    </div>
  )
}
