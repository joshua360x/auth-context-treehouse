import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { ProviderAuth } from './context/ProviderAuth';

render(
  <React.StrictMode>
    <ProviderAuth>
      <Router>
        <App />
      </Router>
    </ProviderAuth>
  </React.StrictMode>,
  document.getElementById('root')
);
