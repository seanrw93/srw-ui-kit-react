import { ReactNode } from 'react'
import './Card.scss'

interface CardProps {
  hasImage?: boolean
  imageSlot?: ReactNode
  children: ReactNode
}

export default function Card({ hasImage = false, imageSlot, children }: CardProps) {
  return (
    <div className={`card${hasImage ? ' card--with-image' : ''}`}>
      {hasImage && <div className="card__image">{imageSlot}</div>}
      <div className="card__body">{children}</div>
    </div>
  )
}
