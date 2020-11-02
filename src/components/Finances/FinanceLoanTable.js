import React from 'react';
import "./finances.css"
import LoanTab from "./LoanTab";

export default class FinanceLoanTable extends React.Component {
    constructor(props) {
        super(props);
        this.loanTable = createTable(this.props.everything, this.props.replaceEverything, this.props.everything.college.loans);
    }

    render() {

        return (
            <div className="finance-col3-row1">
                <h4>Loans</h4>
                <ul className="list-group">
                    {this.loanTable}
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