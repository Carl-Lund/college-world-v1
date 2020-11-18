import React from "react";
import News from "../News/News";

export default class ResidentNews extends React.Component{
    render() {
        return(
            <div className="col-sm-6">
                <div className="well well-sm">
                    <h3>
                        <p>Resident News</p>
                    </h3>
                    <div className="pre-scrollable">
                        <News everything={this.props.everything} newsType={'RES_LIFE_NEWS'}/>
                    </div>
                </div>
            </div>
        );
    }
}
