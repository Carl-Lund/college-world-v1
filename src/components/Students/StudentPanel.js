import React from 'react';
import "./Students.css"

export default class StudentsTable extends React.Component {
    render() {
        const {isAthlete} = this.props.student.athlete;
        const {isSick} = this.props.student.numberHoursLeftBeingSick > 1;
        return (
            <div className="col-sm-4" style={{height: '80%', float: 'right', marginTop: -200, marginRight: '2em'}}>
                <div className="well well-sm" style={{height: '100%'}}>
                        <table className="table table-hover" style={{tableLayout: 'fixed', marginLeft: 0, marginRight: 0, height: '100%', float: 'right', display: 'inline-block'}}>
                            <tbody>
                            <br></br><br></br>
                                <tr>
                                    <td></td>
                                    <td style={{padding: 0, paddingBottom: '1em', paddingTop: '1em', textAlign: 'justify', verticalAlign: 'middle', wordWrap: "normal",}}><b>{this.props.student.name} Statistics</b></td>
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
                                    <td><strong>Overall:</strong></td>
                                    <td>{determineHappiness(this.props.student.happiness)}</td>
                                </tr>

                                <tr>
                                    <td><strong>Academics:</strong></td>
                                    <td>{determineHappiness(this.props.student.academicRating)}</td>
                                </tr>
                                <tr>
                                    <td><strong>Cost:</strong></td>
                                    <td>{determineHappiness(this.props.student.costRating)}</td>
                                </tr>
                                <tr>
                                    <td><strong>Infrastructure:</strong></td>
                                    <td>{determineHappiness(this.props.student.infrastructuresRating)}</td>
                                </tr>
                                <tr>
                                    <td><strong>Safety:</strong></td>
                                    <td>{determineHappiness(this.props.student.safetyRating)}</td>
                                </tr>
                                <tr>
                                    <td><strong>Social:</strong></td>
                                    <td>{determineHappiness(this.props.student.socialRating)}</td>
                                </tr>
                                <tr>
                                    <td><strong>Sports:</strong></td>
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
    if(studentRating >= 85){
        return "Very Happy";
    }
    else if(studentRating < 85 && studentRating >= 70){
        return "Happy";
    }
    else if(studentRating < 70 && studentRating > 55){
        return "Slightly Happy";
    }
    else if(studentRating < 55 && studentRating >= 45){
        return "Neutral";
    }
    else if(studentRating < 45 && studentRating >= 30){
        return "Slightly Unhappy";
    }
    else if(studentRating < 30 && studentRating >= 15){
        return "Unhappy";
    }
    else if(studentRating < 15){
        return "Very Unhappy";
    }
}