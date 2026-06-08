import { createContext, useContext, useState, ReactNode } from 'react'

export interface ModalConfig {
  title: string
  body: string
  confirmLabel?: string
  danger?: boolean
}

interface ModalContextValue {
  isOpen: boolean
  config: ModalConfig
  open: (cfg: ModalConfig) => void
  close: () => void
}

const ModalContext = createContext<ModalContextValue | null>(null)

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [config, setConfig] = useState<ModalConfig>({ title: '', body: '' })

  function open(cfg: ModalConfig) {
    setConfig(cfg)
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

  return (
    <ModalContext.Provider value={{ isOpen, config, open, close }}>
      {children}
    </ModalContext.Provider>
  )
}

export function useModal() {
  const ctx = useContext(ModalContext)
  if (!ctx) throw new Error('useModal must be used within ModalProvider')
  return ctx
}
