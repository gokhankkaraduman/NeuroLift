import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/global.css'
import './css/variables.css'
import App from './components/App/App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter } from 'react-router-dom'

const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId={googleClientId}>
          <App />
      </GoogleOAuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
