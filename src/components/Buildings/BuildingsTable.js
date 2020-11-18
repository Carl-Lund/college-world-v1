import React from "react";
import "./buildings.css"

export default class BuildingsTable extends React.Component {

    render() {
        let tableStyle = {
            border: '1px solid #ccc',
            borderCollapse: 'collapse',
            margin: '0',
            padding: '0',
            width: '100%',
            tableLayout: 'fixed'
        }
        let trStyle = {
            background: '#f8f8f8',
            border: '1px solid #ddd',
            padding: '.35em'
        }
        let thStyle = {
            padding: '.625em',
            textAlign: 'center',
            fontSize: '.85em',
            letterSpacing: '.1em'
        }
        let tdStyle = {
            padding: '.625em',
            textAlign: 'center',
            verticalAlign: 'middle'
        }

        return(
            <table className="table table-condensed" style={tableStyle}>
                <tbody>
                <tr style={trStyle}>
                    <th style={thStyle}>Building Name</th>
                    <th style={thStyle}>Building Type</th>
                    <th style={thStyle}>Size</th>
                    <th style={thStyle}>Open Spots</th>
                    <th style={thStyle}>Quality</th>
                    <th style={thStyle}>Current Disaster</th>
                    <th style={thStyle}>Status</th>
                    <th style={thStyle}>Actions</th>
                </tr>
                </tbody>
                <tbody>
                {this.props.table}
                </tbody>
            </table>
        )
    }

}