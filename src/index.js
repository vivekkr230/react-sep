import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.json'
import reportWebVitals from './reportWebVitals';
import {Loginpage} from './components/login/login.jsx'
import { DataFetch } from './components/iphone15/datafetch';
import { ComplexDataFetch } from './components/complexdatahandling/products';
import { Nasa } from './components/nasa/nasa';
import { FakeStoreApi } from './components/fakestore/fakestore';
import { FakeStoreWithFilter } from './components/fakewithinteraction/fakeint';
import { StyleBinding } from './components/smallcomponents/stylebinding';
import { LightAndDark } from './components/smallcomponents/lighanddark';
import { GenericElement } from './components/smallcomponents/genericelement';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GenericElement />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
