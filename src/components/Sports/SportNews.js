import React from 'react';
import "./Sports.css"

export default class SportNews extends React.Component {

    constructor(props) {
        super(props);

        this.setRows = this.setRows.bind(this);

    }

    render() {


        return (
            <div>
                <div className="jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <h4>{this.props.collegeName} Sport News:</h4>
                            </div>
                            <div className="col-sm-6">
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="pre-scrollable">
                                    <div className="list-group">
                                        {this.setRows()}
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        );

    }

    setRows() {
        var rows = [];

        for (let i = 0; i <this.props.news.length; i++) {
            if (this.props.news[i].noteType === "SPORTS_NEWS"){
                if (this.props.news[i].noteLevel === "BAD_NEWS"){
                    rows.push(this.setBadNews(this.props.news[i]))
                }else{
                    rows.push(this.setGoodNews(this.props.news[i]))
                }

            }
        }

        return rows
    }

    setBadNews(theMessage){
        var oneRow =[];
        oneRow.push(
            <a className="list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                    <div className="row">
                        <div className="col-sm-1">
                            <img className="imageIcon" src="resources/images/bad_news.png"/>
                        </div>
                        <div className="col-sm-11">
                            <h5 className="mb-1">{theMessage.message}</h5>
                            <small className="text-muted">Day {Math.round(theMessage.hour / 24)}</small>
                        </div>
                    </div>

                </div>

            </a>
        )

        return oneRow

    }

    setGoodNews(theMessage){
        var oneRow =[];
        oneRow.push(
            <a className="list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                    <div className="row">
                        <div className="col-sm-1">
                            <img className="imageIcon" src="resources/images/good_news.png"/>
                        </div>
                        <div className="col-sm-11">
                            <h5 className="mb-1">{theMessage.message}</h5>
                            <small className="text-muted">Day {Math.round(theMessage.hour / 24)}</small>
                        </div>
                    </div>

                </div>

            </a>
        )

        return oneRow
    }

}


