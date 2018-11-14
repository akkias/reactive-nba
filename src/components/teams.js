import React, {Component} from 'react';
import {Link} from 'react-router-dom';
const TEAMS_URL = 'http://localhost:3005/teams'

class Teams extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allTeams: [],
            filteredTeams: [],
            searchTerm: ''
        }
    }
    fetchAllTeams() {
        fetch(TEAMS_URL)
        .then(teams => teams.json())
        .then(json => {
            this.setState({
                allTeams:json,
                filteredTeams:json
            })
        })
    }
    renderTeams() {
        return this.state.filteredTeams.map(team => {
            return(
                <Link key={team.id} className="team_item" to={`/team/${team.name}`}><img alt={team.name} src={`/images/teams/${team.logo}`} /></Link>
            )
        })
    }
    filterTeams(event) {
        if(event.target.value === '') {
            this.setState({
                filteredTeams: this.state.allTeams,
                searchTerm: ''
            });
        } else {
            let filtered = this.state.filteredTeams.filter((team) => {
                return team.name.includes(event.target.value);
            });
            this.setState({
                searchTerm: event.target.value,
                filteredTeams: filtered
            });
        }
    }
    componentDidMount() {
        this.fetchAllTeams();
    }
    render() {
        return(
            <div className="teams_component">
                <div className="teams_input">
                    <input type="text" onChange={event => this.filterTeams(event)} value={this.state.searchTerm} placeholder="Search for a Team" />
                </div>
                <div className="teams_container">
                    <span>
                        {this.renderTeams()}
                    </span>
                </div>
            </div>
        )
    }
}

export default Teams;