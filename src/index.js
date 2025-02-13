import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
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
import { Preview } from './components/smallcomponents/preview';
import { MouseEvent } from './components/movseevent/mouse_event';
import { ReactTime } from './components/timeevent/time';
import { LoadImages } from './components/timeevent/loadimages';
import { FormEvents } from './components/forms/formevent';
import { Properties } from './components/props/props';
import { ConditionRender } from './components/conditionalRendering/conditionRender';
import { CancelRender } from './components/conditionalRendering/contextcondition';
import { DynamicInput } from './components/conditionalRendering/dynamicvaluseSave';
import { ReducerView } from './components/reducerview/reduceview';
import { RefrenceDemo } from './components/reference-demo/reference-demo';
import { RefrenceMemory } from './components/reference-demo/referencewithmemory';
import { CardSlideShow } from './components/slide-show/cardslide';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CardSlideShow />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
