import React from 'react';

import Navigation from "../Navigation/Navigation";

export default class Store extends React.Component {
    render() {
        return (
            <div>
                <h2>Start of college view...</h2>
                <Navigation />
                {this.props.everything.store && (
                    <h2>Item name = {this.props.everything.store[0].name}</h2>
                )
                }
                {this.props.everything.store && (
                    <h2>Description = {this.props.everything.store[0].description}</h2>
                )
                }
            </div>
        );
    }
}
