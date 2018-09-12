import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { BrowserRouter as Router } from 'react-router-dom'



ReactDOM.render(
  <Router>
    <App/>
  </Router>, document.getElementById('root'));
