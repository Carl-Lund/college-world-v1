import React from 'react';
import NewsItem from "../News/NewsItem";

export default class CollegeRetention extends React.Component {
    render() {
        const title = this.props.title
        return (
            <div className="well">
                <h1>{title}</h1>
                <div className="pre-scrollable">
                    <ul className="list-group">
                            {createTable(this.props.everything.college, this.props.everything.news, this.props.newsType)}
                    </ul>
                </div>
            </div>
        );
    }
}

function createTable(college, news, newsType) {
    let table = [];

    for (let i = news.length-1; i >= 0; i--) {
        if (newsType == news[i].noteType)
            table.push(<NewsItem everything = {college} newsItem = {news[i]} newsItemNumber={i}/>)
    }
    return table
}