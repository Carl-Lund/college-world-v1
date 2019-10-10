import React from 'react';
import "./Students.css"
import Navigation from "../Navigation/Navigation";

export default class StudentsTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {isAthlete} = this.props.student.athlete;
        const {isSick} = this.props.student.numberHoursLeftBeingSick > 1;
        return (
            <div className="col-sm-4">
                <div className="well well-sm">
                    <div className="pre-scrollable">

                        <table>
                            <tr>
                                <td></td>
                                <td>Student:</td>
                                <td>{this.props.student.name}</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>ID Number:</td>
                                <td>{this.props.student.idNumber}</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Gender:</td>
                                <td>{this.props.student.gender}</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Advisor:</td>
                                <td>{this.props.student.advisor.facultyName}</td>
                            </tr>

                            {isAthlete ? (
                                <div>
                                    <tr>
                                        <td></td>
                                        <td>Team:</td>
                                        <td>{this.props.student.team}</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>Athletic Ability:</td>
                                        <td>{this.props.student.athleticAbility}</td>
                                    </tr>
                                </div>
                            ) : (
                                <div></div>
                            )}

                            {isSick ? (
                                <div>
                                    <tr>
                                        <td></td>
                                        <td>Sick for:</td>
                                        <td>{this.props.student.numberHoursLeftBeingSick} more hours</td>
                                    </tr>
                                </div>
                            ) : (
                                <div></div>
                            )}

                            <tr>
                                <td><img class="img-responsive" src="resources/images/fun.png"></img></td>
                                <td><b>Overall Happiness</b></td>
                                <td>{this.props.student.happinessLevel}</td>
                            </tr>
                            <tr>
                                <td><img class="img-responsive" src="resources/images/books.png"></img></td>
                                <td>Academic Happiness</td>
                                <td>{this.props.student.academicHappinessRating}</td>
                            </tr>
                            <tr>
                                <td><img class="img-responsive" src="resources/images/advisor.png"></img></td>
                                <td>Advisor Happiness</td>
                                <td>{this.props.student.advisorHappinessRating}</td>
                            </tr>
                            <tr>
                                <td><img class="img-responsive" src="resources/images/HEALTH.png"></img></td>
                                <td>Health Happiness</td>
                                <td>{this.props.student.healthHappinessRating}</td>
                            </tr>
                            <tr>
                                <td><img class="img-responsive" src="resources/images/money.jpg"></img></td>
                                <td>Money Happiness</td>
                                <td>{this.props.student.moneyHappinessRating}</td>
                            </tr>
                            <tr>
                                <td><img class="img-responsive" src="resources/images/smile.png"></img></td>
                                <td>Fun Happiness</td>
                                <td>{this.props.student.funHappinessRating}</td>
                            </tr>
                            <tr>
                                <td><img class="img-responsive" src="resources/images/science_dept.png"></img></td>
                                <td>Professor Happiness</td>
                                <td>{this.props.student.professorHappinessRating}</td>
                            </tr>
                            <tr>
                                <td><img class="img-responsive" src="resources/images/campus.png"></img></td>
                                <td>Overall Building Happiness</td>
                                <td>{this.props.student.overallBuildingHappinessRating}</td>
                            </tr>
                            <tr>
                                <td><img class="img-responsive" src="resources/images/DINING.png"></img></td>
                                <td>Dining Hall Happiness</td>
                                <td>{this.props.student.diningHallHappinessRating}</td>
                            </tr>
                            <tr>
                                <td><img class="img-responsive" src="resources/images/ACADEMIC.png"></img></td>
                                <td>Academic Center Happiness</td>
                                <td>{this.props.student.academicCenterHappinessRating}</td>
                            </tr>
                            <tr>
                                <td><img class="img-responsive" src="resources/images/DORM.png"></img></td>
                                <td>Dorm Happiness</td>
                                <td>{this.props.student.dormHappinessRating}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}