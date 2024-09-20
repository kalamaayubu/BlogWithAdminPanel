import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ContextProvider from './context/ContextProvider.jsx'
import { BrowserRouter as Router } from 'react-router-dom';
import { TooltipProvider } from './context/TooltipContextProvider.jsx'
import Tooltip from './components/Tooltip.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
        <ContextProvider>
          <TooltipProvider>
            <Router>
              <App />
              <Tooltip />
            </Router>
          </TooltipProvider>
        </ContextProvider>
  </StrictMode>
)
