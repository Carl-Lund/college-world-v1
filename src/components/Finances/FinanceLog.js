import React from 'react';
import "./finances.css"
import News from "../News/News";

export default class FinanceLog extends React.Component {
    render() {

        return (
            <div className="finance-log-box">
                <h3>Financial Log</h3>
                <News everything={this.props.everything} newsType={'FINANCIAL_NEWS'}/>
            </div>
        );
    }
}