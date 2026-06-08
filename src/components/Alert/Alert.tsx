import { ReactNode } from 'react'
import './Alert.scss'

export type AlertVariant = 'info' | 'success' | 'warning' | 'error'

const iconMap: Record<AlertVariant, string> = {
  info: 'ℹ',
  success: '✓',
  warning: '⚠',
  error: '✕',
}

interface AlertProps {
  variant?: AlertVariant
  children: ReactNode
}

export default function Alert({ variant = 'info', children }: AlertProps) {
  return (
    <div className={`alert alert--${variant}`} role="alert">
      <span className="alert__icon" aria-hidden="true">{iconMap[variant]}</span>
      <div className="alert__content">{children}</div>
    </div>
  )
}
