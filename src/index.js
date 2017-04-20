import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Index from './pages/Index';
import Icons from './pages/Icons';
import Buttons from './pages/Buttons';
import Images from './pages/Images';
import Comments from './pages/Comments';

import './index.css';

const rootElement = document.getElementById('root');

render((
    <Router history={ hashHistory }>
        <Route path="/" component={ Index }>
            <IndexRoute component={ Icons } />
            <Route path="/icon" component={ Icons } />
            <Route path="/button" component={ Buttons } />
            <Route path="/image" component={ Images } />
            <Route path="/comment" component={ Comments } />
        </Route>
    </Router>
), rootElement);
