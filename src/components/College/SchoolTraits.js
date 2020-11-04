import React from 'react';
import CurrentLevel from "../CurrentLevel/CurrentLevel";
import CollegeDashboard from "../CollegeDashboard/CollegeDashboard";
import News from "../News/News";
import Tuition from "./Tuition";
import PlayMode from "./PlayMode";
import PopupEventHandler from "../PopupEvents/PopupEventHandler";



export default class College extends React.Component {

    render() {

        return (
            <div>
                <h1 className="card-title boxcontent">{this.props.everything.college.runId} Traits </h1>
                <div className="flexbox-container">

                    <div className="traitBox">
                        <div className="boxcontent">
                            <img className="traits-icon" src="resources/images/academictrait.png"></img>
                            <h3> Academics:</h3>
                            <h4>A</h4>
                        </div>

                    </div>
                    <div className="traitBox">
                        <div className="boxcontent">
                            <img className="traits-icon" src="resources/images/athletictrait.png"></img>
                            <h3>Athletics:</h3>
                            <h4>B</h4>
                        </div>
                    </div>
                    <div className="traitBox">
                        <div className="boxcontent">
                            <img className="traits-icon" src="resources/images/infastructuretrait.png"></img>
                            <h3>Infastructure:</h3>
                            <h4>B+</h4>
                        </div>

                    </div>
                    <div className="traitBox">
                        <div className="boxcontent">
                            <img className="traits-icon" src="resources/images/safetytrait.png"></img>
                            <h3>Safety:</h3>
                            <h4>D</h4>
                        </div>
                    </div>
                    <div className="traitBox">
                        <div className="boxcontent">
                            <img className="traits-icon" src="resources/images/costtrait.png"></img>
                            <h3>Cost:</h3>
                            <h4>C-</h4>
                        </div>
                    </div>
                    <div className="traitBox">
                        <div className="boxcontent">
                            <img className="traits-icon" src="resources/images/socialtrait.png"></img>
                            <h3>Social:</h3>
                            <h4>B</h4>
                        </div>
                    </div>
                    <div className="traitBox">
                        <div className="boxcontent">
                            <img className="traits-icon" src="resources/images/artistictrait.png"></img>
                            <h3>Arts:</h3>
                            <h4>D</h4>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}