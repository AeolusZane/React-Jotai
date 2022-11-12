import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
let container = document.getElementById('root') as HTMLElement;

let root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)