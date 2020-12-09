import React from 'react';
import "./finances.css"
import Tuition from "../College/Tuition";
import Col from "react-bootstrap/Col";

export default class FinanceTable extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <div className="finance-statistic-box">
                <h3>Statistics</h3>
                <h5>Balance: ${((this.props.everything.college.availableCash))}</h5>
                <h5 className="positive">Daily Income: ${((this.props.everything.college.totalIncome))}</h5>
                <h5 className="negative">Daily Expenditure: ${((this.props.everything.college.totalExpenditure))}</h5>
                <h5>Debt: ${((this.props.everything.college.debt))}</h5>
                <h5>Credit: ${((this.props.everything.college.credit))}</h5>
                <div className="tuition-box">
                    <Tuition everything={this.props.everything} replaceEverything={this.props.replaceEverything}/>
                </div>
            </div>
        );
    }
}