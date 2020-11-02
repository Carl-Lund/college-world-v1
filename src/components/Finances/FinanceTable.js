import React from 'react';
import "./finances.css"

export default class FinanceTable extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <div className="finance-col1-row1">
                <h3>Statistics</h3>
                <h5>Balance: ${((this.props.everything.college.availableCash))}</h5>
                <h5>Daily Income: ${((this.props.everything.college.totalIncome))}</h5>
                <h5>Daily Expenditure: ${((this.props.everything.college.totalExpenditure))}</h5>
                <h5>Debt: ${((this.props.everything.college.debt))}</h5>
                <h5>Credit: {((this.props.everything.college.credit))}</h5>
            </div>
        );
    }
}