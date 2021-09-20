import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MoviesProvider from './context/MoviesProvider';

ReactDOM.render(
  <MoviesProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MoviesProvider>,
  document.getElementById('root'),
);
