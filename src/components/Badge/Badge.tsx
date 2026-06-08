import { ReactNode } from 'react'
import './Badge.scss'

export type BadgeVariant = 'neutral' | 'success' | 'warning' | 'error' | 'info' | 'dark'

interface BadgeProps {
  variant?: BadgeVariant
  dot?: boolean
  children: ReactNode
}

export default function Badge({ variant = 'neutral', dot = false, children }: BadgeProps) {
  return (
    <span className={`badge badge--${variant}`}>
      {dot && <span className="badge__dot" aria-hidden="true" />}
      {children}
    </span>
  )
}
