import React from 'react';
import CurrentLevel from "../CurrentLevel/CurrentLevel";
import CollegeDashboard from "../CollegeDashboard/CollegeDashboard";
import News from "../News/News";
import Tuition from "./Tuition";
import PlayMode from "./PlayMode";
import PopupEventHandler from "../PopupEvents/PopupEventHandler";

export default class College extends React.Component {

    render() {
        const launchStatus = this.props.launchStatus;
        if (!this.props.everything || launchStatus != 'loadingDone') {
            return <p></p>;
        }

        return (
            <div>
                {/*<PopupEventHandler everything={this.props.everything} replaceEverything={this.props.replaceEverything}/>*/}
                <div className="container">
                    <div className="row">
                        <CurrentLevel everything={this.props.everything} changeTimeFunction={this.props.changeTimeFunction} replaceEverything={this.props.replaceEverything}/>
                    </div>
                    <div className="row">
                        <CollegeDashboard everything={this.props.everything} replaceEverything={this.props.replaceEverything}/>
                    </div>

                    <div className="row">
                        <div className="col-sm-6">
                            <News everything={this.props.everything} newsType={'COLLEGE_NEWS'} title={'College News'}/>
                        </div>
                        <div className="col-sm-6">
                            <News everything={this.props.everything} newsType={'FINANCIAL_NEWS'} title={'Financial Reports'}/>
                        </div>

                        <PlayMode everything={this.props.everything} replaceEverything={this.props.replaceEverything}/>
                    </div>
                </div>
            </div>

        );
    }
}