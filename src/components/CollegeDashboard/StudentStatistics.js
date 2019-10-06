import React from 'react';

export default class StudentStatistics extends React.Component {

    render() {

        return (
            <div className="col-sm-4">
                <div className="well well-sm">
                    <div className="text">
                        <h3>Students:{this.props.everything.college.numberStudentsAdmitted}</h3>
                        <h3>Student/Faculty Ratio:{this.props.everything.college.studentFacultyRatioRating}</h3>
                        <h3>Students Considering:{this.props.everything.college.numberStudentsAccepted}</h3>
                    </div>
                    <button href="#acceptedDetails" type="button" className="btn btn-light"
                            data-toggle="collapse">Details
                    </button>
                    <div id="acceptedDetails" className="collapse">
                        New students enter the college on the first of the month. Potential students decide to come
                        based on how happy the college seems.
                    </div>
                </div>
            </div>
        );
    }
}