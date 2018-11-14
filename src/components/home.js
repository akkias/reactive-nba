import React, {Component} from 'react';
import Covers from './covers'
import Subscription from './subscriptions'
import Blocks from './blocks'
import Polls from './poll'

const HOME_URL = 'http://localhost:3005/home'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            home: '',
        }
    }
    componentDidMount() {
        fetch(HOME_URL, {
            method: 'GET'
        })
        .then(res => res.json())
        .then(json => {
            this.setState({ home: json })
        });
    }
    render() {
        return(
            <>
                <Covers slides={this.state.home.slider} />
                <Subscription />
                <Blocks blocks={this.state.home.blocks} />
                <Polls />
            </>
        );
    }
}

export default Home;