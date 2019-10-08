import React from 'react';
import CurrentLevel from "../CurrentLevel/CurrentLevel";
import CollegeDashboard from "../CollegeDashboard/CollegeDashboard";
import Day from "../Day/Day";

export default class College extends React.Component {

    render() {
        if (!this.props.everything) {
            return <p>Loading...</p>;
        }

        return (
            <div>
                <CurrentLevel everything={this.props.everything}/>
                <Day everything={this.props.everything} replaceEverything={this.props.replaceEverything}/>
                <CollegeDashboard everything={this.props.everything}/>
            </div>
        );
    }
}