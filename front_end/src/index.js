import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Routes from './Routes';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
