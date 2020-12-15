import React from 'react';
import "./finances.css"
import { PieChart } from 'react-minimal-pie-chart';
import { Chart } from "react-google-charts";

export default class ExpensesGraph extends React.Component {

    createChart(data){
        //if the user hasn't spent money yet, tell them so they don't just see a blank box
        if(data.loansPercent === 0 && data.sportsPercent === 0 && data.buildingsPercent === 0
            && data.facultyPercent === 0 && data.storePercent === 0){
            return <p>Theres no data yet.</p>;
        }
        else{
           return <Chart
                width={'300px'}
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
                    title: 'College Expenses',
                }}
                rootProps={{ 'data-testid': '1' }}
                />
        }
    }
    render() {

        return (
            <div className="expense-graph-box">
                {this.createChart(this.props.everything.college.expensesGraph)}
            </div>
        );
    }
}