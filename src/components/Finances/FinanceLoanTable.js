import React from 'react';
import "./finances.css"
import LoanTab from "./LoanTab";

export default class FinanceLoanTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="finance-loan-table-box">
                <h4>Loans</h4>
                <ul className="list-group">
                    {createTable(this.props.everything, this.props.replaceEverything, this.props.everything.college.loans)}
                </ul>
            </div>
        );
    }
}

function createTable(everything, replaceEverything, loans) {
    let table = [];

    for (let i = 0; i < loans.length; i++) {
        table.push(<LoanTab everything = {everything} replaceEverything = {replaceEverything} num = {i} loans = {loans[i]} amt = {loans[i].value} interest = {loans[i].interest} pay = {loans[i].weeklyPayment}/>)
    }
    return table
}