import React from 'react';
import { CircularProgressbar, buildStyles, CircularProgressbarWithChildren, } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
// https://codesandbox.io/s/nw1292l93l
export default class StackedProgressBar extends React.Component {
    render(){
        function getTextColor(value1, value2) {
            if(Math.floor(value1) > Math.floor(value2)){
                return "#fc3d17";
            }
            else if(Math.floor(value1) < Math.floor(value2)){
                return "#37db45";
            }
        }

        function getBarColor(value1, value2){
            let temp = "gray";
            if(Math.floor(value1) > Math.floor(value2)){
                temp="red";
            }
            else if(Math.floor(value1) < Math.floor(value2)){
                temp="green background";
            }
            else{
                temp="background"
            }
            return temp;
        }

        let impactedValueColor=getTextColor(this.props.oldRating, this.props.impact);
        let barColor=getBarColor(this.props.oldRating, this.props.impact);



        if(this.props.oldRating > this.props.impact) {
            return (
                <div style={{position: 'relative'}}>
                    <div style={{position: 'absolute'}}>
                        <CircularProgressbarWithChildren value={this.props.oldRating} className="gray background">
                            <img
                                style={{width: 90, marginTop: -5}}
                                src={this.props.image}
                            />
                            <div style={{fontSize: 12}}>
                                <strong style={{color:"#636060"}}>{this.props.oldRating}%</strong> ->
                                <strong style={{color:impactedValueColor}}>{Math.round(this.props.impact)}%</strong>
                            </div>
                        </CircularProgressbarWithChildren>
                    </div>
                    <div style={{position: 'absolute'}}>
                        <CircularProgressbarWithChildren
                            value={this.props.impact}
                            className={barColor}
                        />
                    </div>
                </div>
            );
        }
        else{
            return (
                <div style={{position: 'relative'}}>
                    <div style={{position: 'absolute'}}>
                        <CircularProgressbarWithChildren
                            value={this.props.impact}
                            className={barColor}
                        />
                    </div>
                    <div style={{position: 'absolute'}}>
                        <CircularProgressbarWithChildren value={this.props.oldRating} className="gray">
                            <img
                                style={{width: 90, marginTop: -5}}
                                src={this.props.image}
                            />
                            <div style={{fontSize: 12}}>
                                <strong style={{color:"#636060"}}>{this.props.oldRating}%</strong> ->
                                <strong style={{color:impactedValueColor}}>{Math.round(this.props.impact)}%</strong>
                            </div>
                        </CircularProgressbarWithChildren>
                    </div>
                </div>
            );
        }
    }
}