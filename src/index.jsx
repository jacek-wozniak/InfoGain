import App from "./Components/App";
import React from 'react';
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(
  document.getElementById('app')
);

root.render(
  <React.StrictMode>
        <App />
  </React.StrictMode>
);
