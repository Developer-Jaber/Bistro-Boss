import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Router from './Router/Router.jsx'
import { HelmetProvider } from 'react-helmet-async'
import AuthProvider from './Provider/AuthProvider.jsx'
import {
  QueryClient,
  QueryClientProvider,
  useQuery
} from '@tanstack/react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <Router></Router>
        </QueryClientProvider>
      </AuthProvider>
    </HelmetProvider>
  </StrictMode>
)
