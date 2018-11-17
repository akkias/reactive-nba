import React,{Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './home';
import Teams from './teams';
import TeamProfile from './team_profile';
import Header from './shared/header';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <>
                    <Header></Header>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/teams" component={Teams} />
                    <Route exact path="/team/:name" component={TeamProfile} />
                </>
            </BrowserRouter>
        )
    }
}

export default App;