import React from 'react';
import Navigation from "../Navigation/Navigation";

export default class College extends React.Component {
    render() {
        return (
            <div>
                <h2>This is the overall college view.</h2>
            <Navigation />
            </div>
        );
        /*
        <Navigation />
        return <h2>This is the overall college view.</h2>;
        */
    }
}