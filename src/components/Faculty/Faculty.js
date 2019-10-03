import React from 'react';
import Navigation from "../Navigation/Navigation";

export default class Faculty extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            table: null
        };
    }
    componentDidMount() {
        fetch('http://localhost:8080/enccollegeworld_war_exploded/faculty/acorn')
            .then(response => response.json())
            .then(data => this.setState({
                table: createTable(data)
            }))
            .then(data => {this.setState({ data });
                console.log("Fetched faculty data " + data)
            })

        function createTable(data){
            let table = [];
            console.log(data);

            let professors = [];
            //create the titles
            professors.push(<td>Faculty ID</td>);
            professors.push(<td>College ID</td>);
            professors.push(<td>Faculty Name</td>);
            professors.push(<td>Title</td>);
            professors.push(<td>Department</td>);
            table.push(<tr>{professors}</tr>);

            for(let i = 0; i < 5; i++){
                professors = [];
                professors.push(<td>{data[i].facultyID}</td>);
                professors.push(<td>{data[i].collegeID}</td>);
                professors.push(<td>{data[i].facultyName}</td>);
                professors.push(<td>{data[i].title}</td>);
                professors.push(<td>{data[i].departmentName}</td>);
                table.push(<tr>{professors}</tr>);
            }
            return table;
        }
    }

    render() {
        return (
            <div>
                <h2>A look at some professors...</h2>
                <Navigation />
                <table>
                    {this.state.table}
                </table>
            </div>
        );
    }
}