import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom"

import {Provider} from "./contexts/Authetication"
ReactDOM.render(
  <Provider>
    <Router>
        <React.StrictMode>
           <App />
        </React.StrictMode>
    </Router>
  </Provider>
,
  document.getElementById('root')
);
