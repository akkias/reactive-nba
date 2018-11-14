import React from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './components/home';
import Header from './components/shared/header';
import Teams from './components/teams';
import TeamProfile from './components/team_profile';

ReactDOM.render(
    <BrowserRouter>
        <>
            <Header></Header>
            <Route exact path="/" component={Home} />
            <Route exact path="/teams" component={Teams} />
            <Route exact path="/team/:name" component={TeamProfile} />
        </>
    </BrowserRouter>
    , document.getElementById('root'));