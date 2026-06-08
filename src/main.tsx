import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { ModalProvider } from './context/ModalContext'
import { router } from './router'
import './styles.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <ModalProvider>
        <RouterProvider router={router} />
      </ModalProvider>
    </ThemeProvider>
  </StrictMode>,
)
