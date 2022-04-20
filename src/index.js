import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import { UserProvider } from './contexts/user.context';
import { ProductProvider } from './contexts/products.contexts';
import { CartProvider } from './contexts/cart.context';
import reportWebVitals from './reportWebVitals';


const container = document.getElementById('root');
const root = createRoot(container);


root.render(
  <React.StrictMode>
    <BrowserRouter>
    <UserProvider>
        <ProductProvider>
            <CartProvider>
            <App />
            </CartProvider>
       </ProductProvider>
    </UserProvider> 
    </BrowserRouter>
 </React.StrictMode>,
);

reportWebVitals();
