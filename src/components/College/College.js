import React from 'react';
import CurrentLevel from "../CurrentLevel/CurrentLevel";
import CollegeDashboard from "../CollegeDashboard/CollegeDashboard";
import News from "../News/News";
import PlayMode from "./PlayMode";
import "./Dashboard.css";
import CurrentObjectives from "../Objectives/CurrentObjectives";

export default class College extends React.Component {

    render() {
        const launchStatus = this.props.launchStatus;
        if (!this.props.everything || launchStatus != 'loadingDone') {
            return <p></p>;
        }

        return (
            <div>
                {/*<PopupEventHandler everything={this.props.everything} replaceEverything={this.props.replaceEverything}/>*/}
                <div className="level">
                    <CurrentLevel everything={this.props.everything} changeTimeFunction={this.props.changeTimeFunction} replaceEverything={this.props.replaceEverything}/>
                </div>
                <div className="container">
                    <div className="row">
                        <CollegeDashboard everything={this.props.everything} replaceEverything={this.props.replaceEverything}/>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <News everything={this.props.everything} newsType={'COLLEGE_NEWS'} title={'College News'}/>
                        </div>
                        <div className="col-sm-6" >
                            <h1> Current Objectives: </h1>
                            <CurrentObjectives everything={this.props.everything}/>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}