import React from 'react';

export default class NewsItem extends React.Component {

    render() {
        const collegeModel = this.props.everything
        const newsItem = this.props.newsItem;
        const newsItemNumber  = this.props.newsItemNumber;
        let goodNewsStyle = {
            color: 'lawngreen'
        };
        let badNewsStyle = {
            color: 'red'
        };

        return (
            <li key={newsItemNumber.toString()} className="list-group-item" >
                {(newsItem.noteLevel === 'GOOD_NEWS') ? <span className="glyphicon glyphicon-thumbs-up" style={goodNewsStyle}></span> : null}
                {(newsItem.noteLevel === 'BAD_NEWS') ? <span className="glyphicon glyphicon-thumbs-down" style={badNewsStyle}></span> : null}
                Semester: {newsItem.semester} Week {hoursToWeeks(newsItem.hour)}:  {newsItem.message}
                {(newsItem.amount > 0) ? <span style={goodNewsStyle}> ${newsItem.amount}</span> : null}
                {(newsItem.amount < 0) ? <span style={badNewsStyle}> ${newsItem.amount}</span> : null}
            </li>
        );
    }
}

function hoursToWeeks(hours) {
    let x =(Math.floor(hours / 24 / 7) + 1) % 15
    if(x === 0) {   //Change week 0 to 15
        x = 15;
    }
    return x;
}