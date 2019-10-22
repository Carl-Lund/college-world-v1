import React from 'react';
import Select from 'react-select';

export default class PlayMode extends React.Component {
    constructor(props) {
        super(props);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.updateCollegeOnServer = this.updateCollegeOnServer.bind(this);
    }

    handleOnChange(value) {
        this.props.everything.college.mode = value.value;
        this.props.replaceEverything(this.props.everything);
        this.updateCollegeOnServer(this.props.everything.college);
    }

    updateCollegeOnServer(college) {
        fetch('http://localhost:8080/enccollegeworld_war_exploded/rest/college/{this.props.everything.college.runId}',
            {
                method: 'POST',
                body: JSON.stringify(college)
            }
        )
            .then(response => response.json())
            .then(data => {
            });
    }

    render() {
        const playModes = [
            {label: "PLAY", value: "PLAY"},
            {label: "DEMO", value: "DEMO"},
            {label: "DEMO_FIRE", value: "DEMO_FIRE"},
            {label: "DEMO_PLAGUE", value: "DEMO_PLAGUE"},
            {label: "DEMO_RIOT", value: "DEMO_RIOT"},
            {label: "DEMO_SNOW", value: "DEMO_SNOW"},
            {label: "DEMO_FLOOD", value: "DEMO_FLOOD"},
            {label: "DEMO_CHAMPIONSHIP", value: "DEMO_CHAMPIONSHIP"},
            {label: "DEMO_ZOMBIE_MUTATION", value: "DEMO_ZOMBIE_MUTATION"},
        ];
        return (
            <div className="container">
                <div row>
                    <div className="col-sm-3">
                        <div className="well well-sm">
                            <legend>Play Mode</legend>
                            <div className="form-group">
                                <Select
                                    options={playModes}
                                    value={{label: this.props.everything.college.mode, value: this.props.everything.college.mode}}
                                    onChange={value => this.handleOnChange(value)}
                                    defaultValue={{label: this.props.everything.college.mode, value: this.props.everything.college.mode}}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}