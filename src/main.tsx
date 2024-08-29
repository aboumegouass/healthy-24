// import '@mantine/dates/styles.css';
// import 'mantine-react-table/styles.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './i18n.ts'
import { BrowserRouter } from 'react-router-dom';
import { Providers } from './utils/provider';
import AppRouter from './layout/AppRouter';
import '@mantine/core/styles.css';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Providers>
      <React.StrictMode>
        <AppRouter />
      </React.StrictMode>
    </Providers>
  </BrowserRouter>
)
