import React from 'react';
import "./finances.css"
import { PieChart } from 'react-minimal-pie-chart';
import { Chart } from "react-google-charts";

export default class ExpensesGraph extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <div className="finance-col1-row2">
                <h3>Expenses</h3>
                <Chart
                    width={'300px'}
                    height={'300px'}
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['Task', 'Hours per Day'],
                        ['Loans', this.props.everything.college.expensesGraph.loansPercent],
                        ['Sports', this.props.everything.college.expensesGraph.sportsPercent],
                        ['Buildings', this.props.everything.college.expensesGraph.buildingsPercent],
                        ['Faculty', this.props.everything.college.expensesGraph.facultyPercent],
                        ['Store', this.props.everything.college.expensesGraph.storePercent],
                    ]}
                    options={{
                        title: '',
                    }}
                    rootProps={{ 'data-testid': '1' }}
                />
            </div>
        );
    }
}