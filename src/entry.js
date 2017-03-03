require("./css/common.scss");
import React from 'react'
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, Link, IndexRedirect,browserHistory} from 'react-router';

import App from './components/app/App';
import Home from './components/home/Home';
import Project from "./components/project/Project";
import Resume from "./components/resume/Resume"
ReactDOM.render(
    <Router history={hashHistory}  >
        <Route path="/" component={App}>
            <IndexRedirect to="home" />
            <Route path="home" component={Home} />
            <Route path="project" component={Project} />
            <Route path="resume" component={Resume} />
        </Route>
    </Router>, document.getElementById('app'))