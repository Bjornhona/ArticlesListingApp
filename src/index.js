import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './index.css';
import App from './AppContainer';
import reportWebVitals from './reportWebVitals';

import store from './redux/store';
import { Provider } from 'react-redux';

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
