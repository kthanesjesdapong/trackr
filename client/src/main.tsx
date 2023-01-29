import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '@/src/App';
import { RouterProvider } from 'react-router-dom';
import router from '@src/routes/Routes';

// import './index.css';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>,
);
