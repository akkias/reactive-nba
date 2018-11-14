import React,{Component} from 'react';


class Subscription extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            success:false
        }
    }
    saveSubscription = (email) => {
        const URL_EMAIL = 'http://localhost:3005/subcriptions'
        fetch(URL_EMAIL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email})
            })
        .then(response => response.json())
        .then(() => {
            this.setState({
                email: '',
                success: true
            })
        })
    }
    clearMessage = () => {
        setTimeout(function() {
            this.setState({
                success: false,
            });
        }.bind(this), 5000)
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.saveSubscription();
        this.clearMessage();
    }
    onInputChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    render() {
        return(
            <div className="subcribe_panel">
                <h3>Subscribe to us</h3>
                <form onSubmit={this.handleSubmit}>
                    <input name="email" value={this.state.email}  onChange={this.onInputChange} type="email" placeholder="Enter your email to subscribe" />
                </form>
                {this.state.success && <div className="success">You have subscribed to the updates successfully</div>}
                <div>
                    <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>
                </div>
            </div>
        )
    }
}
export default Subscription;