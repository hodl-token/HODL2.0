import React from 'react';
import ReactDOM from 'react-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.css"; 
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';

import "./style.css";
import reportWebVitals from './reportWebVitals';
import 'boxicons'
import 'remixicon/fonts/remixicon.css'
import 'aos/dist/aos.css'; // You can also use <link> for styles



import AOS from 'aos';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import Dashboard from './Dashboard'
import Guide from './Guide'
import Privacy from './Privacy'
import Terms from './Terms'
import Dapp from './components/Dapp'
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
// import Test from './components/test'

AOS.init();
 
ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Switch>
    <Route path="/dashboard">
    <Dapp />
    </Route>
    <Route path="/guide">
      <Guide />
    </Route>
    <Route path="/privacy">
      <Privacy />
    </Route>
    <Route path="/terms">
      <Terms />
    </Route>
    {/* <Route path="/test">
      <Test />
    </Route> */}

    <Route path="/">
      <App />
    </Route>
    
    </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();