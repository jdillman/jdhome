import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from 'registerServiceWorker';
import App from 'components/App';

/* eslint-disable react/jsx-filename-extension */
ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
registerServiceWorker();
