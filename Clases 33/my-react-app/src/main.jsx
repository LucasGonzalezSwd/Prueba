import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // Asegúrate de importar el Provider de react-redux
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store.js'; // Asegúrate de importar el store que creaste
import App from './App.jsx';
import './index.css';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}> {/* Envuelve la aplicación en el Provider */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
