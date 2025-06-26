import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import AppContextProvider from './context/AppContext.jsx';
import SavedForLaterProvider from './context/savedForLaterContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AppContextProvider>
        <SavedForLaterProvider>
          <App />
        </SavedForLaterProvider>
      </AppContextProvider>
    </BrowserRouter>
  </StrictMode>
);
