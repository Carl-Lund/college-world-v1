import React from 'react';
import Navigation from "../Navigation/Navigation";

export default class Students extends React.Component {

    render() {
        let table = [];

        let children = [];
        children.push(<td>NAME</td>)
        children.push(<td>ID NUMBER</td>)
        children.push(<td>HAPPINESS</td>)
        children.push(<td>ATHLETE</td>)
        children.push(<td>ATHLETIC ABILITY</td>)
        table.push(<tr>{children}</tr>)


        for (let i = 0; i < 5; i++) {
            children = [];
            // column by column
            children.push(<td>{this.props.everything.students[i].name}</td>)
            children.push(<td>{this.props.everything.students[i].idNumber}</td>)
            children.push(<td>{this.props.everything.students[i].happinessLevel}</td>)
            children.push(<td>{this.props.everything.students[i].athlete.toString()}</td>)
            children.push(<td>{this.props.everything.students[i].athleticAbility}</td>)
            // row by row
            table.push(<tr>{children}</tr>)
        }

        return (
            <div>
                <Navigation />
                <h2>Start of student view...</h2>
                <table>
                    {table}
                </table>
            </div>
        );
    }
}