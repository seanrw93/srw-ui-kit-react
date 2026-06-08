import Badge from '../../components/Badge/Badge'
import './BadgePage.scss'

export default function BadgePage() {
  return (
    <div className="page">
      <h1 className="page__title">Badge</h1>
      <p className="page__desc">Six semantic variants. Optional leading dot for status indication.</p>

      <section className="demo-block">
        <span className="demo-block__label">Variants</span>
        <div className="demo-block__content demo-block__content--row">
          <Badge variant="neutral">Neutral</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="error">Error</Badge>
          <Badge variant="info">Info</Badge>
          <Badge variant="dark">Dark</Badge>
        </div>
      </section>

      <section className="demo-block">
        <span className="demo-block__label">With Dot</span>
        <div className="demo-block__content demo-block__content--row">
          <Badge variant="success" dot>Active</Badge>
          <Badge variant="warning" dot>Pending</Badge>
          <Badge variant="error" dot>Failed</Badge>
          <Badge variant="neutral" dot>Offline</Badge>
        </div>
      </section>
    </div>
  )
}
