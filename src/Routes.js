import React from 'react';
import {Switch, Route} from 'react-router-dom';

import ProtectedRoute from './ProtectedRoute';

import Home from './components/layout/Home';
import SignUpForm from './components/auth/SignUpForm';
import LogInForm from './components/auth/LogInForm';
import LogOutPage from './components/layout/LogOutPage';
import GiveAway from './components/layout/GiveAway';
import Panel from './components/panel/Panel';

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/signup' component={SignUpForm} />
            <Route path='/login' component={LogInForm} />
            <Route path="/logout" component={LogOutPage} />
            <ProtectedRoute path="/oddaj-rzeczy" component={GiveAway}/>
            <ProtectedRoute path="/panel" component={Panel}/>
        </Switch>
    )
}

export default Routes;