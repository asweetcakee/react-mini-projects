import ReactDom from 'react-dom/client'
import { StrictMode } from 'react'
import './index.css'
import App from './App.jsx'

import '@fontsource/montserrat'
import '@fontsource/lato'

ReactDom.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
