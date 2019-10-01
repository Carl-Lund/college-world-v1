import React from 'react';
import Navigation from "../Navigation/Navigation";

export default class Students extends React.Component {
    render() {
        return (
            <div>
                <h2>Start of student view...</h2>
                <Navigation />
            </div>
        );
        /*
        <Navigation />
        return <h2>This is the overall college view.</h2>;
        */
    }
}