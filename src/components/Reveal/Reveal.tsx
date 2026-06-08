import { useEffect, useRef, ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  delay?: number
  from?: 'default' | 'right'
  className?: string
}

export default function Reveal({ children, delay = 0, from = 'default', className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (from === 'right') el.classList.add('reveal--right')

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setTimeout(() => el.classList.add('revealed'), delay)
        observer.unobserve(el)
      },
      { threshold: 0.08 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay, from])

  const cls = ['reveal', className].filter(Boolean).join(' ')
  return (
    <div ref={ref} className={cls}>
      {children}
    </div>
  )
}
