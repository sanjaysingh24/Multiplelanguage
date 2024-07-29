import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Store from './Provider/Store.jsx'
import './i18n.js';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Store>
    <App />
    </Store>
  </React.StrictMode>,
)
