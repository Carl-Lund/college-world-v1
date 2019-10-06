import React from 'react';

export default class Sports extends React.Component {

    render() {
        try {
            return (
                <div>
                    {this.props.everything.sports && (
                        <h2>Coach name = {this.props.everything.sports[0].coachName}</h2>
                    )
                    }
                    {this.props.everything.sports && (
                        <h2>Hours until next game = {this.props.everything.sports[0].hoursUntilNextGame}</h2>
                    )
                    }

                </div>
            );
        }catch(error) {
            return null
            // expected output: ReferenceError: nonExistentFunction is not defined
            // Note - error messages will vary depending on browser
        }
    }
}