import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './main/App';
import * as serviceWorker from './serviceWorker';
import {Route,Switch,BrowserRouter} from "react-router-dom";
import Detail from "./detail/detail";

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App}></Route>
            <Route path='/detail' component={Detail}/>
        </Switch>
    </BrowserRouter>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
