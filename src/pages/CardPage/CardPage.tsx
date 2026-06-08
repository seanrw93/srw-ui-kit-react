import Card from '../../components/Card/Card'
import './CardPage.scss'

export default function CardPage() {
  return (
    <div className="page">
      <h1 className="page__title">Card</h1>
      <p className="page__desc">
        Composable container with optional image slot via <code>imageSlot</code> prop.
      </p>

      <section className="demo-block">
        <span className="demo-block__label">Without Image</span>
        <div className="demo-block__content">
          <div className="card-grid">
            <Card>
              <p className="card-label">Section label</p>
              <h3 className="card-heading">Card title goes here</h3>
              <p className="card-body">Supporting text for the card. One or two lines works best.</p>
            </Card>
            <Card>
              <p className="card-label">Section label</p>
              <h3 className="card-heading">Another card</h3>
              <p className="card-body">A second card to show the layout in context. Consistent height via grid.</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="demo-block">
        <span className="demo-block__label">With Image Slot</span>
        <div className="demo-block__content">
          <div className="card-grid">
            <Card hasImage imageSlot={<div className="card-img-placeholder" />}>
              <p className="card-label">Image card</p>
              <h3 className="card-heading">Card with image</h3>
              <p className="card-body">The image slot renders above the body via the imageSlot prop.</p>
            </Card>
            <Card hasImage imageSlot={<div className="card-img-placeholder card-img-placeholder--alt" />}>
              <p className="card-label">Image card</p>
              <h3 className="card-heading">Second image card</h3>
              <p className="card-body">Projected image content via the <code>imageSlot</code> prop.</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
