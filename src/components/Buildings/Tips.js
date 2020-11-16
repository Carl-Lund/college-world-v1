import React from "react";
import TipsBox from "../College/TipsBox";

export default class Tips extends React.Component {

    render() {
        return (
            <div>
                <div className="tips">
                    <div className="hideTips-building">
                        <button type="button" onClick={this.props.hideShowTipsTextBuilding} className="btn btn-info">{this.props.hideShowTipsTextBuildingText}</button>
                        <div id="building-tips">
                            <TipsBox everything = {this.props.everything} name = {'Infrastructure'} tips = {this.props.everything.college.collegeTips.infrastructureTips}/>
                        </div>
                    </div>
                </div>
                <div className="tips-2">
                    <div className="hideTips-safety">
                        <button type="button" onClick={this.props.hideShowTipsTextSafety} className="btn btn-info">{this.props.hideShowTipsTextSafetyText}</button>
                        <div id="safety-tips">
                            <TipsBox everything = {this.props.everything} name = {'Safety'} tips = {this.props.everything.college.collegeTips.safetyTips}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


}