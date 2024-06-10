import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { loadTheme } from '@fluentui/react'

loadTheme({
  defaultFontStyle: {
    fontFamily: 'Arial, sans-serif',
    /*fontWeight: 'bold',*/
  },
  fonts: {
    small: {
      fontSize: '12px',
    },
    medium: {
      fontSize: '14px',
    },
    large: {
      fontSize: '18px',
    },
    // Add other font styles as needed
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.Fragment>
    <App />
  </React.Fragment>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
)
