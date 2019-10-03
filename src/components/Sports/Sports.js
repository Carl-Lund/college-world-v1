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
        try {
            return (
                <div>
                    <h2>Start of college view...</h2>
                    <Navigation/>
                    {this.state.data && (
                        <h2>Coach name = {this.state.data[0].coachName}</h2>
                    )
                    }
                    {this.state.data && (
                        <h2>Hours until next game = {this.state.data[0].hoursUntilNextGame}</h2>
                    )
                    }

                </div>
            );
        }catch(error) {
            return null
            console.error(error);
            // expected output: ReferenceError: nonExistentFunction is not defined
            // Note - error messages will vary depending on browser
        }
        /*
        <Navigation />
        return <h2>This is the overall college view.</h2>;
        */
    }
}