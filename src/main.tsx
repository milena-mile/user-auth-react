import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from "react-router-dom";
import { LogInProvider } from './context/logInContext';


ReactDOM.createRoot(document.getElementById('root')!).render(
  
  <React.StrictMode>
    <LogInProvider>
      <BrowserRouter basename="/user-authorisation-react">
        <App />
      </BrowserRouter>
    </LogInProvider>
  </React.StrictMode>,
)
