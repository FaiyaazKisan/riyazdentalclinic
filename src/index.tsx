import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import "bootstrap-icons/font/bootstrap-icons.css"
import {BrowserRouter} from 'react-router-dom'
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import EmailApi from './API/EmailApi';
import MyCasesApi from './API/MyCasesApi';
import { Provider } from 'react-redux';
import store from './Redux/store';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
  <Provider store={store}>
    <ToastContainer/>
    <App />
  </Provider>
  </BrowserRouter>
);

