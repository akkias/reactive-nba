import React, {Component} from 'react'
const TEAM_URL = 'http://localhost:3005/teams';

class TeamProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            teamDetails: []
        }
    }
    componentDidMount() {
        fetch(`${TEAM_URL}?name=${this.props.match.params.name}`)
        .then(details => details.json())
        .then(details => {
            return(
                this.setState({teamDetails: details})
            )
        })
    }
    renderSquad = (squad) => {
        return squad.map(player => {
            return(
                <div className="item player_wrapper" key={player.name}>
                    <img alt={player.name} src="/images/avatar.png"></img>
                    <h4>{player.name}</h4>
                    <div className="node"><span>Number:</span>{player.number}</div>
                    <div className="node"><span>PPG:</span>{player.PPG}</div>
                    <div className="node"><span>APG:</span>{player.APG}</div>
                    <div className="node"><span>RPG:</span>{player.RPG}</div>
                </div>
            )
        })
    }
    renderTeam(state) {
        return state.map(team => {
            return (
                <div key={team.id} className="team_data_wrapper">
                    <div className="left">
                        <img src={`/images/teams/${team.logo}`} alt={team.name} />
                    </div>
                    <div className="right">
                        <h1>{team.name}</h1>
                        <p>{team.description}</p>
                        <hr />
                        <div className="squad">
                            {this.renderSquad(team.squad)}
                        </div>
                    </div>
                </div>
            )
        })
    }
    render() {
        return(
            <div className="team_data">
                {this.renderTeam(this.state.teamDetails)}
            </div>
        )
    }
}
export default TeamProfile;