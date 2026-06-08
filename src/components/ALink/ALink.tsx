import { ReactNode } from 'react'
import './ALink.scss'

export type LinkVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent-dark'
export type LinkSize = 'sm' | 'md' | 'lg'

interface ALinkProps {
  variant?: LinkVariant
  size?: LinkSize
  href?: string
  external?: boolean
  disabled?: boolean
  children: ReactNode
}

export default function ALink({
  variant = 'primary',
  size = 'md',
  href = '#',
  external = false,
  disabled = false,
  children,
}: ALinkProps) {
  return (
    <a
      className={`btn btn--${variant} btn--${size}`}
      href={disabled ? undefined : href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      aria-disabled={disabled || undefined}
      tabIndex={disabled ? -1 : undefined}
    >
      {children}
    </a>
  )
}
