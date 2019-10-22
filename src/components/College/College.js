import React from 'react';
import CurrentLevel from "../CurrentLevel/CurrentLevel";
import CollegeDashboard from "../CollegeDashboard/CollegeDashboard";
import News from "../News/News";
import Tuition from "./Tuition";
import PlayMode from "./PlayMode";

export default class College extends React.Component {

    render() {
        const launchStatus = this.props.launchStatus;
        if (!this.props.everything || launchStatus != 'loadingDone') {
            return <p>Loading...</p>;
        }

        return (
            <div>
                <h1>{this.props.everything.college.runId}</h1>
                <CurrentLevel everything={this.props.everything} replaceEverything={this.props.replaceEverything}/>
                <CollegeDashboard everything={this.props.everything}/>

                <div className="container">
                    <div row>
                        <Tuition everything={this.props.everything} replaceEverything={this.props.replaceEverything}/>
                        <PlayMode everything={this.props.everything} replaceEverything={this.props.replaceEverything}/>
                    </div>
                    <div row>
                        <News everything={this.props.everything} newsType={'COLLEGE_NEWS'} title={'College News'}/>
                        <News everything={this.props.everything} newsType={'FINANCIAL_NEWS'} title={'Financial Reports'}/>
                    </div>
                </div>
            </div>
        );
    }
}