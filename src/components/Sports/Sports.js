import React from 'react';
import Navigation from "../Navigation/Navigation";

export default class Sports extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
        };
    }
    componentDidMount() {
        fetch('http://localhost:8080/enccollegeworld_war_exploded/rest/sports/acorn')
            .then(response => response.json())
            .then(data => {this.setState({ data });
                console.log("Fetched college data " + data)
            });
    }

    render() {
        return (
            <div>
                <Navigation />
                <h2>Sports</h2>
                {this.state.data && (
                    <h3>Coach name = {this.state.data[0].coachName}</h3>
                )
                }
                {this.state.data && (
                    <h3>Hours until next game = {this.state.data[0].hoursUntilNextGame}</h3>
                )
                }

            </div>
        );
        /*
        <Navigation />
        return <h2>This is the overall college view.</h2>;
        */
    }
}