import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

import './lib/EventManager';

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
);
