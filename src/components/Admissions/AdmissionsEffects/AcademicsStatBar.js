import React from 'react';
import { CircularProgressbar, buildStyles, CircularProgressbarWithChildren, } from 'react-circular-progressbar';
import StackedProgressbar from './StackedProgressBar';
import 'react-circular-progressbar/dist/styles.css';
import styles from "./ProgressBar.css";
//https://codesandbox.io/s/stacked-circular-progressbars-using-react-circular-progressbar-forked-1kn1b?file=/index.css:0-1667
export default class AcademicsStatBar extends React.Component {

    render() {

        return (
            <div className="col-sm-2">
                <div className="collegeHappinessBar">
                    <h3 className="text-center">ACADEMICS</h3>
                    <br></br>
                    <StackedProgressbar image={"resources/images/academictrait.png"} impact={this.props.impact} oldRating={this.props.oldRating}/>
                    {/*<CircularProgressbarWithChildren value={this.props.impact} styles={buildStyles({pathColor: color})}>*/}
                    {/*    <img*/}
                    {/*        style={{ width: 90, marginTop: -5 }}*/}
                    {/*        src="resources/images/academictrait.png"*/}
                    {/*    />*/}
                    {/*    <div style={{ fontSize: 12}}>*/}
                    {/*        <strong>{Math.round(this.props.impact)}%</strong>*/}
                    {/*    </div>*/}
                    {/*</CircularProgressbarWithChildren>*/}
                    <br/>
                </div>
            </div>
        );
    }
}