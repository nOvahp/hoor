import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import router from './routeing/routes.tsx'
import { RouterProvider } from 'react-router-dom'
import { Provider } from './components/ui/provider.tsx'
import './index.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider >
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
