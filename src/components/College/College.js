import React from 'react';
import CurrentLevel from "../CurrentLevel/CurrentLevel";

export default class College extends React.Component {

    render() {
        return (
            <div>
                <CurrentLevel everything={this.props.everything}/>
            </div>
        );
    }
}