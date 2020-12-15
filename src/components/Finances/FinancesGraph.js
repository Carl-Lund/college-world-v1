import React from 'react';
import "./finances.css"
import { Chart } from "react-google-charts";

export default class FinancesGraph extends React.Component {
    constructor(props) {
        super(props);
        this.createList = this.createList.bind(this);
    }
    createList(data){
        let list = [];
        list.push(['x', 'Tuition']);

        for (let i = 0; i < data.length; i++) {
            if(i === 0){
                list.push([0,40000]);
            }
            else{
                list.push([i, data[i]]);
            }
        }
        console.log(data);
        console.log(list);
        return list;
    }
    render() {

        return (
            <div className="tuition-graph-box">
                <Chart
                    width={'320px'}
                    height={'300px'}
                    chartType="LineChart"
                    loader={<div>Loading Financial Chart</div>}
                    data={this.createList(this.props.everything.college.financialGraph.tuitionCosts)}
                    options={{
                        title: 'Tuition Changes',
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

