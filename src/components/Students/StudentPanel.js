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
                                    <td>Academics</td>
                                    <td>{determineHappiness(this.props.student.academicRating)}</td>
                                </tr>
                                <tr>
                                    <td>Cost</td>
                                    <td>{determineHappiness(this.props.student.costRating)}</td>
                                </tr>
                                <tr>
                                    <td>Infrastructure</td>
                                    <td>{determineHappiness(this.props.student.infrastructuresRating)}</td>
                                </tr>
                                <tr>
                                    <td>Safety</td>
                                    <td>{determineHappiness(this.props.student.safetyRating)}</td>
                                </tr>
                                <tr>
                                    <td>Social</td>
                                    <td>{determineHappiness(this.props.student.socialRating)}</td>
                                </tr>
                                <tr>
                                    <td>Sports</td>
                                    <td>{determineHappiness(this.props.student.sportsRating)}</td>
                                </tr>
                            </tbody>
                        </table>
                </div>
            </div>
        );
    }
}

function determineHappiness(studentRating){
    if(studentRating >= 25){
        return "Very Happy";
    }
    else if(studentRating < 25 && studentRating >= 10){
        return "Happy";
    }
    else if(studentRating < 10 && studentRating > 0){
        return "Slightly Happy";
    }
    else if(studentRating === 0){
        return "Neutral";
    }
    else if(studentRating < 0 && studentRating >= -10){
        return "Slightly Unhappy";
    }
    else if(studentRating < -10 && studentRating > -25){
        return "Unhappy";
    }
    else if(studentRating <= -25){
        return "Very Unhappy";
    }
}