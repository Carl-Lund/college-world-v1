import React from 'react';
import Navigation from "../Navigation/Navigation";
import CollegeBanner from "../CollegeBanner/CollegeBanner";

export default class College extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
        };
    }
    componentDidMount() {
        fetch('http://localhost:8080/enccollegeworld_war_exploded/rest/college/acorn')
            .then(response => response.json())
            .then(data => {this.setState({ data });
                console.log("Fetched college data " + data)
            });
    }

    render() {
        return (
            <div>
                <Navigation />
                <CollegeBanner />
            </div>
        );
        /*
        <Navigation />
        return <h2>This is the overall college view.</h2>;
        */
    }
}