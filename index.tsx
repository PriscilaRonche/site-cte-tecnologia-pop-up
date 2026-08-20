import React from 'react';
import ReactDOM from 'react-dom/client';
// import './src/index.css';
import App from './src/App';
import { HashRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
