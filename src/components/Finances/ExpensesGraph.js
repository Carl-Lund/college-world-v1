import React from 'react';
import "./finances.css"
import { PieChart } from 'react-minimal-pie-chart';
import { Chart } from "react-google-charts";

export default class ExpensesGraph extends React.Component {
    constructor(props) {
        super(props);
    }

    createChart(data){
        if(data.loansPercent === 0 && data.sportsPercent === 0 && data.buildingsPercent === 0
            && data.facultyPercent === 0 && data.storePercent === 0){
            return <p>Theres no data</p>;
        }
        else{
           return <Chart
                width={'400px'}
                height={'300px'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ['Task', 'Hours per Day'],
                    ['Loans', data.loansPercent],
                    ['Sports', data.sportsPercent],
                    ['Buildings', data.buildingsPercent],
                    ['Faculty', data.facultyPercent],
                    ['Store', data.storePercent],
                ]}
                options={{
                    title: '',
                }}
                rootProps={{ 'data-testid': '1' }}
                />
        }
    }
    render() {

        return (
            <div className="finance-col1-row2">
                <h3>Expenses</h3>
                {this.createChart(this.props.everything.college.expensesGraph)}
            </div>
        );
    }
}