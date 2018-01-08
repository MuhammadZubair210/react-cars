import React from 'react';
import {
    Router,
    Route
} from 'react-router-dom';

import App from '../App';
import Register from '../components/Register';
import Login from '../components/Login';
import Carmodel from '../components/Carmodel';
import Welcome from '../components/welcome';
import CustomizeComponent from '../components/customize'
import Sidenav from '../components/Sidenav';
import createBrowserHistory from 'history/createBrowserHistory';

const customHistory = createBrowserHistory()

const MyRoutes = () => (
    <Router history={customHistory}>
        <div>
            <Route exact path="/" component={Welcome} />
            <Route path="/login" component={Login} />
            <Route path="/carmodel" component={Carmodel} />
            <Route path="/register" component={Register} />
            <Route path="/customize" component={CustomizeComponent} />            
            <Route path="/sidenav" component={Sidenav} />            
        </div>
    </Router>
)

export default MyRoutes;