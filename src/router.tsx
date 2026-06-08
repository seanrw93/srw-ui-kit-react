import { createBrowserRouter, Navigate } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import AppLayout from './components/AppLayout/AppLayout'

const Home = lazy(() => import('./pages/Home/Home'))
const LinkPage = lazy(() => import('./pages/LinkPage/LinkPage'))
const ButtonPage = lazy(() => import('./pages/ButtonPage/ButtonPage'))
const BadgePage = lazy(() => import('./pages/BadgePage/BadgePage'))
const InputPage = lazy(() => import('./pages/InputPage/InputPage'))
const AlertPage = lazy(() => import('./pages/AlertPage/AlertPage'))
const CardPage = lazy(() => import('./pages/CardPage/CardPage'))
const ModalPage = lazy(() => import('./pages/ModalPage/ModalPage'))
const PricingPage = lazy(() => import('./pages/PricingPage/PricingPage'))
const FaqPage = lazy(() => import('./pages/FaqPage/FaqPage'))
const ContactPage = lazy(() => import('./pages/ContactPage/ContactPage'))
const NavbarPage = lazy(() => import('./pages/NavbarPage/NavbarPage'))
const HeroPage = lazy(() => import('./pages/HeroPage/HeroPage'))
const FooterPage = lazy(() => import('./pages/FooterPage/FooterPage'))

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function s(C: React.LazyExoticComponent<any>) {
  return <Suspense fallback={null}><C /></Suspense>
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Navigate to="/home" replace /> },
      { path: 'home', element: s(Home) },
      { path: 'link', element: s(LinkPage) },
      { path: 'button', element: s(ButtonPage) },
      { path: 'badge', element: s(BadgePage) },
      { path: 'input', element: s(InputPage) },
      { path: 'alert', element: s(AlertPage) },
      { path: 'card', element: s(CardPage) },
      { path: 'modal', element: s(ModalPage) },
      { path: 'pricing', element: s(PricingPage) },
      { path: 'faq', element: s(FaqPage) },
      { path: 'contact', element: s(ContactPage) },
      { path: 'navbar', element: s(NavbarPage) },
      { path: 'hero', element: s(HeroPage) },
      { path: 'footer', element: s(FooterPage) },
    ],
  },
])
