import Input from '../../components/Input/Input'
import './InputPage.scss'

export default function InputPage() {
  return (
    <div className="page">
      <h1 className="page__title">Input</h1>
      <p className="page__desc">Text input with label, helper text, error, and disabled states.</p>

      <section className="demo-block">
        <span className="demo-block__label">Default</span>
        <div className="demo-block__content">
          <div className="input-grid">
            <Input label="Full name" placeholder="Sean Roennau-Wergen" helperText="Enter your full name as it appears on your ID." />
            <Input label="Email address" placeholder="hello@example.com" helperText="Used for reply only." />
          </div>
        </div>
      </section>

      <section className="demo-block">
        <span className="demo-block__label">Error state</span>
        <div className="demo-block__content">
          <div className="input-grid">
            <Input label="Email address" placeholder="hello@example.com" error="Please enter a valid email address." />
            <Input label="Password" placeholder="••••••••" error="Password must be at least 8 characters." />
          </div>
        </div>
      </section>

      <section className="demo-block">
        <span className="demo-block__label">Disabled</span>
        <div className="demo-block__content">
          <div className="input-grid">
            <Input label="Read-only field" placeholder="Cannot edit this" disabled helperText="This field is disabled." />
          </div>
        </div>
      </section>
    </div>
  )
}
