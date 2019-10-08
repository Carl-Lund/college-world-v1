import React from 'react';
import Navigation from "../Navigation/Navigation";

export default class StudentsTable extends React.Component {
    constructor(props) {
        super(props);
        this.studentTable = createTable(this.props.everything.students);
    }
    
     render() {
        return (
            <div>
                {this.studentTable}
            </div>
        );
        /*
        <Navigation />
        return <h2>This is the overall college view.</h2>;
        */
    }
}

function createTable(data) {
    let table = [];
    console.log(data);

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
        children.push(<td>{data[i].name}</td>)
        children.push(<td>{data[i].idNumber}</td>)
        children.push(<td>{data[i].happinessLevel}</td>)
        children.push(<td>{data[i].athlete.toString()}</td>)
        children.push(<td>{data[i].athleticAbility}</td>)
        // row by row
        table.push(<tr>{children}</tr>)
    }
    return table
}
