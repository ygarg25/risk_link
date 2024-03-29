import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter, HashRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    {/* <BrowserRouter basename="/risk_link"> */}
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      {/* <BrowserRouter basename="/"> */}
      <App />
    </BrowserRouter>

    {/* <HashRouter basename="/">
      <App />
    </HashRouter> */}

  </React.StrictMode >,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
