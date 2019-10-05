import React from 'react';
import Navigation from "../Navigation/Navigation";

export default class Faculty extends React.Component{

    render() {
        let table = [];

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
            professors.push(<td>{this.props.everything.faculty[i].facultyID}</td>);
            professors.push(<td>{this.props.everything.faculty[i].collegeID}</td>);
            professors.push(<td>{this.props.everything.faculty[i].facultyName}</td>);
            professors.push(<td>{this.props.everything.faculty[i].title}</td>);
            professors.push(<td>{this.props.everything.faculty[i].departmentName}</td>);
            table.push(<tr>{professors}</tr>);
        }

        return (
            <div>
                <h2>A look at some professors...</h2>
                <Navigation />
                <table>
                    {table}
                </table>
            </div>
        );
    }
}