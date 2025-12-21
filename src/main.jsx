import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Minimal base styles
import App from './App.jsx';
import { AppProvider } from './AppProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>
);