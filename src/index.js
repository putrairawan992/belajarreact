import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import Example from './Example.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Example />, document.getElementById('root'));
registerServiceWorker();
	