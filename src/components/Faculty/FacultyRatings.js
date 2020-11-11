import React from "react";
import './Faculty.css';


export default class FacultyRatings extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div className="text-center">
                <h3><b>Academic Department Ratings</b></h3>
                <table className="table table-condensed" id="tableContainer">
                    <thead>
                        <tr>
                            <th>Department names</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr><td>Nursing: 75</td></tr>
                    <tr><td>Sports Science and Fitness: 75</td></tr>
                    <tr><td>Arts and Sciences: 75</td></tr>
                    <tr><td>Business: 75</td></tr>
                    <tr><td>Overall Academic Rating: 75</td></tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
