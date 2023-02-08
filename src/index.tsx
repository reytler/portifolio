import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import GlobalContext from './contexts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <GlobalContext>
      <App />
    </GlobalContext>
    </BrowserRouter>
  </React.StrictMode>
);
