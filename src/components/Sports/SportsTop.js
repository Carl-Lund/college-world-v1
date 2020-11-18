import React from 'react';
import "./Sports.css"
import TipsBox from "../College/TipsBox";

export default class SportsTop extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hideShowTipsText : "Show Tips",
            isHide: true,
            showNextTip: true
        };

        this.getSportsTeem = this.getSportsTeem.bind(this);
        this.hideShowTipsText = this.hideShowTipsText.bind(this);
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
                                        <button type="button" onClick={this.hideShowTipsText} className="btn btn-info">{this.state.hideShowTipsText}
                                        </button>
                                    </div>
                                </div>

                                <div className="row">
                                        <div id="hideTips" className="collapse">
                                            <div className="jumbotronTransp">
                                                <TipsBox everything = {this.props.everything} name = {'Athletic'} tips = {this.props.everything.college.collegeTips.athleticTips}/>
                                                {/*<h3>{this.state.tipsText}{console.log(this.state.tipsText)}</h3>*/}
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

    // Old tips code, now generated on the backend
    // setTips() {
    //     //Max number of Tips, if you add more tips change numTips number
    //     let numTips = 3;
    //     switch (this.tipsNum) {
    //         case 0:
    //             this.state.tipsText = "Add more sports to make more money!"
    //             break
    //         case  1:
    //             this.state.tipsText = "Have your Athletes drink plenty of water"
    //             break
    //         case 2:
    //             this.state.tipsText = "Buy a volleyball net at the school store for extra practice"
    //             break
    //         case 3:
    //             this.state.tipsText = "The key to a good school is a good Football Team"
    //             break
    //     }
    //     if (this.tipsNum >= numTips){
    //         this.tipsNum = 0;
    //     }else{
    //         this.tipsNum++
    //     }
    //
    //     return this.state.tipsText
    // }
    //
    // nextTip = () => {
    //     this.setState({ tipsText: this.setTips()});
    // };

    hideShowTipsText = () => {
        let tips = document.getElementById('hideTips');
        if (this.state.isHide){
            this.state.hideShowTipsText = "Hide tips"
            this.setState({isHide: false})
            tips.style.display = "block";
        }else {
            this.state.hideShowTipsText = "Show tips"
            this.setState({isHide: true})
            tips.style.display = "none";
        }
        this.setState({ hideShowTipsText: this.state.hideShowTipsText});
    }

    getSportsTeem() {
        let feedback = (this.props.sports.length + " sports")

        return feedback
    }
}

