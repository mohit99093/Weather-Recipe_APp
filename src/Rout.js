import React from 'react';
import { BrowserRouter, Switch,Route } from 'react-router-dom'
import App from './App.js'
import Card from './components/cards/card/card.js'
import App1 from './components/Weather'
const Router = () => {
    return ( 
        <BrowserRouter>
            <Switch>
                <Route path='/' component={App} exact />
                <Route path='/recipe/:id' component={Card} />
                <Route path='/weather' component = {App1} />
            </Switch>
        </BrowserRouter>
     );
}
 
export default Router;