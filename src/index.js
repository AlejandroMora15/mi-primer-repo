import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ReactForm } from './pages/ReactForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ReactForm />
  </React.StrictMode>
);
