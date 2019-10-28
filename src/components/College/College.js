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
            return <p></p>;
        }

        return (
            <div>
                <CurrentLevel everything={this.props.everything} replaceEverything={this.props.replaceEverything}/>
                <CollegeDashboard everything={this.props.everything} replaceEverything={this.props.replaceEverything}/>

                <div className="container">
                    <div row>
                        <News everything={this.props.everything} newsType={'COLLEGE_NEWS'} title={'College News'}/>
                        <News everything={this.props.everything} newsType={'FINANCIAL_NEWS'} title={'Financial Reports'}/>
                    </div>
                </div>
            </div>
        );
    }
}