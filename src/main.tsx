import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { HashRouter } from "react-router-dom";
import { LogInProvider } from './context/logInContext';


ReactDOM.createRoot(document.getElementById('root')!).render(
  
  <React.StrictMode>
    <LogInProvider>
      <HashRouter basename={import.meta.env.VITE_PUBLIC_URL}>
        <App />
      </HashRouter>
    </LogInProvider>
  </React.StrictMode>,
)