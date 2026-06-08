import { useState } from 'react'
import './Input.scss'

interface InputProps {
  label?: string
  helperText?: string
  error?: string
  disabled?: boolean
  placeholder?: string
}

export default function Input({
  label,
  helperText,
  error,
  disabled = false,
  placeholder,
}: InputProps) {
  const [value, setValue] = useState('')

  return (
    <div
      className={[
        'input-field',
        error ? 'input-field--error' : '',
        disabled ? 'input-field--disabled' : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {label && <label className="input-field__label">{label}</label>}
      <input
        className="input-field__control"
        value={value}
        onChange={e => setValue(e.target.value)}
        disabled={disabled}
        placeholder={placeholder}
        aria-invalid={!!error}
      />
      {error && <span className="input-field__error">{error}</span>}
      {!error && helperText && <span className="input-field__helper">{helperText}</span>}
    </div>
  )
}
