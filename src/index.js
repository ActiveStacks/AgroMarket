import React from 'react';
//import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
//import { render } from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container);

//const root  = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
       <App />
    </BrowserRouter>
 </React.StrictMode>,
);

reportWebVitals();
