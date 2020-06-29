import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './components/layout/Home';
import SignUpForm from './components/auth/SignUpForm';
import LogInForm from './components/auth/LogInForm';
import LogOutPage from './components/layout/LogOutPage';

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/signup' component={SignUpForm} />
            <Route path='/login' component={LogInForm} />
            <Route path="/logout" component={LogOutPage} />
        </Switch>
    )
}

export default Routes;