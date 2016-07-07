/**
 * Created by arun on 12/6/16.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory } from 'react-router';

import Layout from './components/Layout.js';
import Page1 from './components/pages/page1.js';
import Page2 from './components/pages/page2.js';
import Page3 from './components/pages/page3.js';


const app = document.getElementById('app');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={Layout}>
            <IndexRoute component={Page1}></IndexRoute>
            <Route path="abc" component={Page2}></Route>
            <Route  path="def" component={Page3}></Route>
        </Route>
    </Router>,
    app);











