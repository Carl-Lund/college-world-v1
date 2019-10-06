import React from 'react';

export default class About extends React.Component {
    render() {
        return (
            <div>
                <h2>About...</h2>

                    {/*<h2>Hard coded = {this.props.everything}</h2>*/}


                {this.props &&
                 this.props.everything &&
                 this.props.everything.store && (
                    <h2>Item name = {this.props.everything.store[0].name}</h2>
                )
                }
            </div>
        );
    }
}
