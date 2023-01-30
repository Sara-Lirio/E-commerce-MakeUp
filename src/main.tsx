import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoutes from './view/routes/AppRoutes'
import './view/styles/global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppRoutes/>
  </React.StrictMode>,
)
