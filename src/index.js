import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import registerServiceWorker from './registerServiceWorker';
import './style/css/main.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
