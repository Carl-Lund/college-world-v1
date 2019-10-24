import React from 'react';

export default class StudentStatistics extends React.Component {

    render() {

        return (
            <div className="col-sm-2">
                <div className="well well-sm">
                    <div className="text">
                        <h5>Students:{this.props.everything.college.numberStudentsAdmitted}</h5>
                        <h5>Student/Faculty Ratio:{this.props.everything.college.studentFacultyRatioRating}</h5>
                        <h5>Students Considering:{this.props.everything.college.numberStudentsAccepted}</h5>
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