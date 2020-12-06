import React from 'react';
import { CircularProgressbar, buildStyles, CircularProgressbarWithChildren, } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default class StackedProgressBar extends React.Component {
    render(){
        if(this.props.oldRating > this.props.impact) {
            return (
                <div style={{position: 'relative'}}>
                    <div style={{position: 'absolute'}}>
                        <CircularProgressbarWithChildren value={this.props.oldRating} className="green">
                            <img
                                style={{width: 90, marginTop: -5}}
                                src={this.props.image}
                            />
                            <div style={{fontSize: 12}}>
                                <strong>{this.props.oldRating}% -> {Math.round(this.props.impact)}%</strong>
                            </div>
                        </CircularProgressbarWithChildren>
                    </div>
                    <div style={{position: 'absolute'}}>
                        <CircularProgressbarWithChildren
                            value={this.props.impact}
                            className="blue"
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
                            className="blue"
                        />
                    </div>
                    <div style={{position: 'absolute'}}>
                        <CircularProgressbarWithChildren value={this.props.oldRating} className="green">
                            <img
                                style={{width: 90, marginTop: -5}}
                                src={this.props.image}
                            />
                            <div style={{fontSize: 12}}>
                                <strong>{this.props.oldRating}% -> {Math.round(this.props.impact)}%</strong>
                            </div>
                        </CircularProgressbarWithChildren>
                    </div>
                </div>
            );
        }
    }
}