import { ReactNode } from 'react'
import './Button.scss'

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent-dark'
export type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  disabled?: boolean
  loading?: boolean
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  children: ReactNode
}

export default function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  onClick,
  type = 'button',
  children,
}: ButtonProps) {
  return (
    <button
      className={`btn btn--${variant} btn--${size}`}
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
      onClick={onClick}
      type={type}
    >
      {loading && <span className="btn__spinner" aria-hidden="true" />}
      {children}
    </button>
  )
}
