import React from 'react';
import "./Sports.css"

export default class SportsTop extends React.Component {
    constructor(props) {
        super(props);

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
                                <img alt="stadiumImage" className="img-responsive" src="resources/images/stadium.png"></img>
                            </div>
                            <div className="col-sm-6">
                                <h2>Sports</h2>
                                <div>
                                    <strong>{this.getSportsTeem()}</strong>
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
            this.setState({hideShowTipsText:"Hide tips"})
            this.setState({isHide: false})
            tips.style.display = "block";
        }else {
            this.setState({hideShowTipsText:"Show tips"})
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

