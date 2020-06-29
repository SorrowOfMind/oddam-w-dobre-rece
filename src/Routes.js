import React from 'react';
import {Switch, Route} from 'react-router-dom';

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={}/>
            <Route path='/signup' component={} />
            <Route path='/login' component={} />
            <Route path="/logout" component={} />
        </Switch>
    )
}

export default Routes;