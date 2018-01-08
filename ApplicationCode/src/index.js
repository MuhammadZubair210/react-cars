import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

import MyRoutes from './routes/routes';

ReactDOM.render(<MyRoutes />, document.getElementById('root'));
registerServiceWorker();
