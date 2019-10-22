import React from 'react';
import Navigation from "../Navigation/Navigation";
import StudentFeedback from "../Students/Students";
import SportsTop from "./SportsTop";
import SportsRecordTable from "./SportsRecordTable";
import AddSellSports from "./AddSellSports";

export default class Sports extends React.Component {
    //The json file: http://localhost:8080/enccollegeworld_war_exploded/rest/sports/acorn

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         data: null,
    //     };
    // }
    // componentDidMount() {
    //     fetch('http://localhost:8080/enccollegeworld_war_exploded/rest/sports/acorn')
    //         .then(response => response.json())
    //         .then(data => {this.setState({ data });
    //             console.log("Fetched college data " + data)
    //         });
    // }

    // render() {
    //     try {
    //         return (
    //             <div>
    //                 <h2>Start of college view...</h2>
    //                 <Navigation/>
    //                 {this.state.data && (
    //                     <h2>Coach name = {this.state.data[0].coachName}</h2>
    //                 )
    //                 }
    //                 {this.state.data && (
    //                     <h2>Hours until next game = {this.state.data[0].hoursUntilNextGame}</h2>
    //                 )
    //                 }
    //
    //             </div>
    //         );
    //     }catch(error) {
    //         return null
    //         // expected output: ReferenceError: nonExistentFunction is not defined
    //         // Note - error messages will vary depending on browser
    //     }
    //     /*
    //     <Navigation />
    //     return <h2>This is the overall college view.</h2>;
    //     */
    // }

    render() {
        try {
            let coachesTable = [];
            let coaches = [];
            coaches.push(<td>NAME</td>)
            coaches.push(<td>Salary</td>)
            coachesTable.push(<tr>{coaches}</tr>)


            for (let i = 0; i < this.props.everything.sports.length; i++) {
                coaches = [];
                // column by column
                coaches.push(<td>{this.props.everything.sports[i].coachName}</td>)
                coaches.push(<td>{this.props.everything.sports[i].salary}</td>)
                // row by row
                coachesTable.push(<tr>{coaches}</tr>)
            }

            let sportsTable = [];

            let sportsTeam = [];
            sportsTeam.push(<td>TEAM</td>)
            sportsTeam.push(<td>DETAILS</td>)
            sportsTeam.push(<td>WINS</td>)
            sportsTeam.push(<td>LOSSES</td>)
            sportsTeam.push(<td>GAMES PLAYED</td>)
            sportsTeam.push(<td>IN SEASON</td>)
            sportsTeam.push(<td>DIVISION</td>)
            sportsTable.push(<tr>{sportsTeam}</tr>)


            for (let i = 0; i < this.props.everything.sports.length; i++) {
                sportsTeam = [];
                // column by column
                sportsTeam.push(<td>{this.props.everything.sports[i].sportName}</td>)
                sportsTeam.push(<td>{this.props.everything.sports[i].numGames}</td>)
                sportsTeam.push(<td>{this.props.everything.sports[i].gamesWon}</td>)
                sportsTeam.push(<td>{this.props.everything.sports[i].gamesLost.toString()}</td>)
                sportsTeam.push(<td>{this.props.everything.sports[i].overallRep}</td>)
                sportsTeam.push(<td>{this.props.everything.sports[i].sportSeason}</td>)
                sportsTeam.push(<td>{this.props.everything.sports[i].division}</td>)
                // row by row
                sportsTable.push(<tr>{sportsTeam}</tr>)
            }

            return (
                <div>
                    <SportsTop sports = {this.props.everything.sports}/>
                    <SportsRecordTable sports = {this.props.everything.sports}/>
                    <AddSellSports sports = {this.props.everything.sports}/>

                    <table>
                        <h3>COACHES:</h3>
                        {coachesTable}
                    </table>
                    <table>
                        <h3>Sports Record:</h3>
                        {sportsTable}
                    </table>
                </div>
            );
        }catch(error) {
            return null
            // expected output: ReferenceError: nonExistentFunction is not defined
            // Note - error messages will vary depending on browser
        }

    }
}