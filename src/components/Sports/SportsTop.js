import React from 'react';
import "./Sports.css"

import Navigation from "../Navigation/Navigation";

export default class SportsTop extends React.Component {
    constructor(props) {
        super(props);

        this.tipsNum = 1;
        this.isHide = true
        this.state = {
            tipsText: "Add more sports to make more money!",
            hideShowTipsText : "Show Tips",
        };

        this.getSportsTeem = this.getSportsTeem.bind(this);
        // this.afterUpdateCollegeOnServerForSell = this.afterUpdateCollegeOnServerForSell.bind(this);

    }

    render() {
        return (
            <div>
                <div className="jumbotron">

                    <div className="container">
                        <div className="row">
                            <div className="col-sm-2">
                                <img className="img-responsive" src="resources/images/stadium.png"></img>
                            </div>
                            <div className="col-sm-6">

                                <h2>Sports</h2>


                                <div>
                                    <strong>{this.getSportsTeem()}</strong>
                                </div>

                            </div>

                            <div className="col-sm-4">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <button type="button" onClick={this.nextTip} className="btn btn-primary">Next Tip</button>
                                    </div>
                                    <div className="col-sm-6">
                                        <button type="button" onClick={this.hideShowTipsText} className="btn btn-info" data-toggle="collapse"
                                                data-target="#hideTips">{this.state.hideShowTipsText}
                                        </button>
                                    </div>
                                </div>

                                <div className="row">
                                        <div id="hideTips" className="collapse">
                                            <div className="jumbotronTransp">
                                                <h3>{this.state.tipsText}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                        </div>
                    </div>
                </div>
            </div>

        );
    }

    setTips() {
        switch (this.tipsNum) {
            case 0:
                this.state.tipsText = "Add more sports to make more money!"
                break
            case  1:
                this.state.tipsText = "HI1!!!"
                break

        }

        if (this.tipsNum > 0){
            this.tipsNum = 0;
        }else{
            this.tipsNum++
        }

        return this.state.tipsText
    }

    nextTip = () => {
        this.setState({ tipsText: this.setTips()});
    };

    hideShowTipsText = () => {
        if (this.isHide){
            this.state.hideShowTipsText = "Hide tips"
            this.isHide = false
        }else {
            this.state.hideShowTipsText = "Show tips"
            this.isHide = true
        }

        this.setState({ hideShowTipsText: this.state.hideShowTipsText});
    }

    getSportsTeem() {
        var feedback = (this.props.sports.length + " sports")

        return feedback
    }

}

