import React from 'react';
import { CircularProgressbar, buildStyles, CircularProgressbarWithChildren, } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import StackedProgressbar from "./StackedProgressBar";

export default class AthleticsStatBar extends React.Component {

    render() {

        function getColor(value) {
            let temp;
            temp='#4287f5';
            if (value>=70)
                temp='#37db45';
            else if (value<=39)
                temp='#fc3d17';
            else if (value<=49)
                temp='#ffae17';
            else if (value<=59)
                temp='#fce517';
            else if (value<=69)
                temp='#d3ff21';

            return temp;
        }

        let color=getColor(this.props.impact);

        return (
            // <div className="col-sm-2">
            //     <div className="collegeHappinessBar">
            //         <h3 className="text-center">ATHLETICS</h3>
            //         <br></br>
            //         <CircularProgressbarWithChildren value={this.props.impact} styles={buildStyles({pathColor: color})}>
            //             {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
            //             <img
            //                 style={{ width: 90, marginTop: -5 }}
            //                 src="resources/images/athletictrait.png"
            //             />
            //             <div style={{ fontSize: 12}}>
            //                 <strong>{Math.round(this.props.impact)}%</strong>
            //             </div>
            //         </CircularProgressbarWithChildren>
            //         <br/>
            //         {/*<button type="button" href="#happinessDetails" className="btn btn-light"*/}
            //         {/*        data-toggle="collapse">Details*/}
            //         {/*</button>*/}
            //         <div id="happinessDetails" className="collapse">
            //             The happiness of the students depends on their health, academic success,
            //             tuition bills, and how much fun they are having.
            //         </div>
            //     </div>
            // </div>

            <div className="col-sm-2">
                <div className="collegeHappinessBar">
                    <h3 className="text-center">ATHLETICS</h3>
                    <br></br>
                    <StackedProgressbar image={"resources/images/athletictrait.png"} impact={this.props.impact} oldRating={this.props.oldRating}/>
                    <br/>
                </div>
            </div>
        );
    }
}