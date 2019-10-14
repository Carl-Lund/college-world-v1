import React from 'react';

export default class NewsItem extends React.Component {

    render() {
        const newsItem = this.props.newsItem;
        let goodNewsStyle = {
            color: 'lawngreen'
        };
        let badNewsStyle = {
            color: 'red'
        };

        return (
            <li class="list-group-item">
                {(newsItem.noteLevel == 'GOOD_NEWS') ? <span className="glyphicon glyphicon-thumbs-up" style={goodNewsStyle}></span> : null}
                {(newsItem.noteLevel == 'BAD_NEWS') ? <span className="glyphicon glyphicon-thumbs-down" style={badNewsStyle}></span> : null}
                Day {hoursToDays(newsItem.hour)}:  {newsItem.message}
                {(newsItem.amount > 0) ? <span style={goodNewsStyle}> ${newsItem.amount}</span> : null}
                {(newsItem.amount < 0) ? <span style={badNewsStyle}> ${newsItem.amount}</span> : null}
            </li>
        );
    }
}

function hoursToDays(hours) {
    return Math.floor(hours / 24) + 1
}