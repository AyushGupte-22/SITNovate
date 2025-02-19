import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '.src/App';
import './index.css'; // Import your CSS if you have one

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);