import React from 'react';
import Login from './Login'
import AdminIndex from './AdminIndex'
import {BrowserRouter as Router,Route} from 'react-router-dom'


function Main(){
    return(
        <div>
            <Router>
                <Route path="/" exact component={Login} />
                <Route path="/index" component={AdminIndex} />

            </Router>
        </div>
    )
}
export default Main;