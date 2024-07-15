import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { CartProvider } from './CartContext';
import { UserProvider } from './UserContext';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <UserProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </UserProvider>
  </React.StrictMode>
);
