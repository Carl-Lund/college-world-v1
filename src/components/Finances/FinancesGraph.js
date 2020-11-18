import React from 'react';
import "./finances.css"
import { PieChart } from 'react-minimal-pie-chart';
import { Chart } from "react-google-charts";
import {forEach} from "react-bootstrap/cjs/ElementChildren";

export default class FinancesGraph extends React.Component {
    constructor(props) {
        super(props);
        this.createList = this.createList.bind(this);


    }
    createList(data){
        let list = [];
        list.push(['x', 'Tuition']);
        for (let i = 1; i < data.length; i++) {
            list.push([i, data[i]])
        }
        console.log(list);
        return list;
    }
    render() {

        return (
            <div className="finance-col1-row2">
                <h3>Finances</h3>
                <Chart
                    width={'600px'}
                    height={'400px'}
                    chartType="LineChart"
                    loader={<div>Loading Financial Chart</div>}
                    data={this.createList(this.props.everything.college.financialGraph)}
                    // data={[
                    //     ['x', 'Tuition'],
                    //     [0, this.props.everything.college.yearlyTuitionCost],
                        // [1, this.props.everything.college.financialGraph[0]],
                        // [2, this.props.everything.college.financialGraph[1]],
                        // [3, this.props.everything.college.financialGraph[2]],
                        // [4, 18],
                        // [5, 9],
                        // [6, 11],
                        // [7, 27],
                        // [8, 33],
                        // [9, 40],
                        // [10, 32],
                        // [11, 35],
                    // ]}
                    options={{
                        hAxis: {
                            title: 'Weeks',
                        },
                        vAxis: {
                            title: 'Tuition',
                        },
                    }}
                    rootProps={{ 'data-testid': '1' }}
                />
            </div>
        );
    }
}

