import React from 'react';

export default class Store extends React.Component {
    render() {
        return (
            <div>
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
