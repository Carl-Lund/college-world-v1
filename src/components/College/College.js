import React from 'react';
import CurrentLevel from "../CurrentLevel/CurrentLevel";
import CollegeDashboard from "../CollegeDashboard/CollegeDashboard";

export default class College extends React.Component {

    render() {
        if (!this.props.everything) {
            return <p>Loading...</p>;
        }

        return (
            <div>
                <CurrentLevel everything={this.props.everything}/>
                <CollegeDashboard everything={this.props.everything}/>
            </div>
        );
    }
}