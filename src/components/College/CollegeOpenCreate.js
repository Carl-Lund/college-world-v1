import React from 'react';
import College from "./College";
import Tuition from "./Tuition";

export default class CollegeOpenCreate extends React.Component {

    constructor(props) {
        super(props);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.loadCollege = this.loadCollege.bind(this);
    }

    handleOnChange(e) {;
        this.props.setCollegeName(e.target.value);
    }

    loadCollege() {
        if (this.props.collegeName == "")
            return;

        console.log("Loading college");
        //this.props.setLaunchStatus('loadInProgressxxxxxx');
        const address = 'http://localhost:8080/enccollegeworld_war_exploded/rest/everything/'+ this.props.collegeName;
        console.log(address);
        fetch(address)
            .then(response => response.json())
            .then(data => {this.props.replaceEverything(data);
           });
    }

    render() {
        const collegeName = this.props.collegeName;
        return (
            <div className="col-sm-3">
                <div className="well well-sm">
                    College
                    <input type="text" value={collegeName} onChange={this.handleOnChange} />
                    <button onClick={this.loadCollege}>Load</button>
                </div>
            </div>

        );
    }
}