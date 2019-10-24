import React from 'react';
import NewsItem from "../News/NewsItem";

export default class CollegeRetention extends React.Component {
    constructor(props) {
        super(props);
        this.newsTable = createTable(this.props.everything.news, this.props.newsType);
    }

    render() {
        const title = this.props.title
        return (
            <div>
                <div className="col-sm-6">
                    <div className="well well-sm">
                        <h4>{title}</h4>
                        <div className="pre-scrollable">
                            <ul className="list-group">
                                    {this.newsTable}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function createTable(news, newsType) {
    let table = [];

    for (let i = news.length-1; i >= 0; i--) {
        if (newsType == news[i].noteType)
            table.push(<NewsItem newsItem = {news[i]} newsItemNumber={i}/>)
    }
    return table
}