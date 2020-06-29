import React from 'react';
import {Switch, Route} from 'react-router-dom';

import SignUpForm from './components/auth/SignUpForm';
import LogInForm from './components/auth/LogInForm';

const Routes = () => {
    return (
        <Switch>
            {/* <Route exact path='/' component={}/> */}
            <Route path='/signup' component={SignUpForm} />
            <Route path='/login' component={LogInForm} />
            {/* <Route path="/logout" component={} /> */}
        </Switch>
    )
}

export default Routes;