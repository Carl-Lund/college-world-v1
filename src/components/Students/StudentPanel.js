import React from 'react';
import "./Students.css"

export default class StudentsTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {isAthlete} = this.props.student.athlete;
        const {isSick} = this.props.student.numberHoursLeftBeingSick > 1;
        return (
            <div className="col-sm-4" style={{height: '80%', float: 'right', marginTop: -200, marginRight: '2em'}}>
                <div className="well well-sm" style={{height: '100%'}}>
                        <table className="table table-hover" style={{tableLayout: 'fixed', marginLeft: 0, marginRight: 0, height: '100%', float: 'right', display: 'inline-block'}}>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td style={{padding: 0, paddingBottom: '1em', paddingTop: '1em', textAlign: 'justify', veritcalAlign: 'middle', wordWrap: "normal",}}><b>{this.props.student.name} Statistics</b></td>
                                    <td></td>
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
                                    <img class="img-responsive panel-image panel-image" src="resources/images/fun.png" alt=""/>
                                    <td>Overall Happiness</td>
                                    <td>{this.props.student.happiness}</td>
                                </tr>
                                <tr>
                                    <img className="img-responsive panel-image" src="resources/images/books.png"></img>
                                    <td>Academic Happiness </td>
                                    <td>{this.props.student.academicHappinessRating}</td>
                                </tr>
                                <tr>
                                    <img class="img-responsive panel-image" src="resources/images/advisor.png"></img>
                                    <td>Advisor Happiness</td>
                                    <td>{this.props.student.advisorHappinessRating}</td>
                                </tr>
                                <tr>
                                    <img class="img-responsive panel-image" src="resources/images/HEALTH.png"></img>
                                    <td>Health Happiness</td>
                                    <td>{this.props.student.healthHappinessRating}</td>
                                </tr>
                                <tr>
                                    <img class="img-responsive panel-image" src="resources/images/money.jpg"></img>
                                    <td>Money Happiness</td>
                                    <td>{this.props.student.moneyHappinessRating}</td>
                                </tr>
                                <tr>
                                    <img class="img-responsive panel-image" src="resources/images/smile.png"></img>
                                    <td>Fun Happiness</td>
                                    <td>{this.props.student.funHappinessRating}</td>
                                </tr>
                                <tr>
                                    <img class="img-responsive panel-image" src="resources/images/science_dept.png"></img>
                                    <td>Professor Happiness</td>
                                    <td>{this.props.student.professorHappinessRating}</td>
                                </tr>
                                <tr>
                                    <img class="img-responsive panel-image" src="resources/images/campus.png"></img>
                                    <td>Overall Building Happiness</td>
                                    <td>{this.props.student.overallBuildingHappinessRating}</td>
                                </tr>
                                <tr>
                                    <img class="img-responsive panel-image" src="resources/images/DINING.png"></img>
                                    <td>Dining Hall Happiness</td>
                                    <td>{this.props.student.diningHallHappinessRating}</td>
                                </tr>
                                <tr>
                                    <img class="img-responsive panel-image" src="resources/images/ACADEMIC.png"></img>
                                    <td>Academic Center Happiness</td>
                                    <td>{this.props.student.academicCenterHappinessRating}</td>
                                </tr>
                                <tr>
                                    <img class="img-responsive panel-image" src="resources/images/DORM.png"></img>
                                    <td>Dorm Happiness</td>
                                    <td>{this.props.student.dormHappinessRating}</td>
                                </tr>
                            </tbody>
                        </table>
                </div>
            </div>
        );
    }
}