import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routers from './Routers/Routers'
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './provider/AuthProvider'
import {

  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

// Create a client
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <div className='max-w-screen-xl mx-auto'>
          <RouterProvider router={routers}></RouterProvider>
        </div>
      </QueryClientProvider>
    </HelmetProvider>
  </AuthProvider>
)
