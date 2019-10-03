import React from 'react';
import Navigation from "../Navigation/Navigation";

export default class Students extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            table: null
        };
    }
    componentDidMount() {
        fetch('http://localhost:8080/enccollegeworld_war_exploded/rest/students/acorn')
            .then(response => response.json())
            .then(data => this.setState({
                table: createTable(data)
            }))
            .then(data => {this.setState({ data });
                console.log("Fetched student data " + data)
            })

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
                children.push(<td>{data[i].athlete}</td>)
                children.push(<td>{data[i].athleticAbility}</td>)
                // row by row
                table.push(<tr>{children}</tr>)
            }
            return table
        }

        
    }
    
    render() {
        return (
            <div>
                <Navigation />
                <h2>Start of student view...</h2>
                <table>
                    {this.state.table}
                </table>
            </div>
        );
        /*
        <Navigation />
        return <h2>This is the overall college view.</h2>;
        */
    }
}