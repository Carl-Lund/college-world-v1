import React from "react";
import TipsBox from "../College/TipsBox";

export default class Tips extends React.Component {

    render() {
        return (
            <div>
                <div className="tips">
                    {/*<div className="hideTips">*/}
                    {/*    <button type="button" onClick={this.hideShowTipsText} className="btn btn-info">{this.state.hideShowTipsText}</button>*/}
                    <div className="building-tips">
                        <TipsBox everything = {this.props.everything} name = {'Infrastructure'} tips = {this.props.everything.college.collegeTips.infrastructureTips}/>
                    </div>
                    {/*</div>*/}
                </div>
                <div className="tips-2">
                    {/*<div className="hideTips">*/}
                    {/*    <button type="`button" onClick={this.hideShowTipsText} className="btn btn-info">{this.state.hideShowTipsText}</button>*/}
                    <div className="safety-tips">
                        <TipsBox everything = {this.props.everything} name = {'Safety'} tips = {this.props.everything.college.collegeTips.safetyTips}/>
                    </div>
                    {/*</div>*/}
                </div>
            </div>
        );
    }
}