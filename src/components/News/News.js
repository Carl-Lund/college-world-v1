import React from 'react';
import NewsItem from "../News/NewsItem";

export default class CollegeRetention extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const title = this.props.title
        return (
            <div className="well">
                <h4>{title}</h4>
                <div className="pre-scrollable">
                    <ul className="list-group">
                            {createTable(this.props.everything.news, this.props.newsType)}
                    </ul>
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