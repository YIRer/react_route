import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'client/index';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Root />
  , document.getElementById('root'));
registerServiceWorker();
