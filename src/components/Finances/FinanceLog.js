import React from 'react';
import "./finances.css"
import News from "../News/News";
import { PieChart } from 'react-minimal-pie-chart';
import { Chart } from "react-google-charts";

export default class FinanceLog extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <div className="finance-log-box">
                <h3>Financial Log</h3>
                <News everything={this.props.everything} newsType={'FINANCIAL_NEWS'}/>
            </div>
        );
    }
}