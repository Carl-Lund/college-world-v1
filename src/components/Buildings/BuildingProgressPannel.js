import React from "react";

export default class BuildingProgressPannel extends React.Component {
    render() {
        return(
            <div className="container">
                <div className="jumbotron" >
                    <div className="row">
                        {/*<div className="col-md-12">*/}
                        <div className="col-md-2" style={{marginRight: '3%'}}>
                            <h4>Large Size</h4>
                            <img className="img-responsive" src="resources/images/EXTRA_LARGE_DORM_k.png"/>
                            <h5>Total progress:</h5>
                            <div className="progress">
                                <div className="progress-bar progress-bar-info" role="progressbar" aria-valuemin={0} aria-valuemax={100} style={{borderRadius: '5px', width: Math.min(100, Math.floor(100*(this.props.numStudents/150)))}}>
                                    {Math.min(100, Math.floor(100*(this.props.numStudents/150)))}%
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2" style={{marginRight: '3%'}}>
                            <h4>Extra Large Size</h4>
                            <img className="img-responsive" src="resources/images/EXTRA_LARGE_DORM_k.png"/>
                            <h5>Total progress:</h5>
                            <div className="progress">
                                <div className="progress-bar progress-bar-info" role="progressbar" aria-valuemin={0} aria-valuemax={100} style={{borderRadius: '5px', width: Math.min(100, Math.floor(100*(this.props.numStudents/200)))}}>
                                    {Math.min(100, Math.floor(100*(this.props.numStudents/200)))}%
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2" style={{marginRight: '3%'}}>
                            <h4>Library</h4>
                            <img className="img-responsive" src="resources/images/LIBRARY_k.png" style={{marginTop: '37px', marginBottom: '38px'}}/>
                            <h5>Total progress:</h5>
                            <div className="progress">
                                <div className="progress-bar progress-bar-info" role="progressbar" aria-valuemin={0} aria-valuemax={100} style={{borderRadius: '5px', width: Math.min(100, Math.floor(100*(this.props.numStudents/300)))}}>
                                    {Math.min(100, Math.floor(100*(this.props.numStudents/300)))}%
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2" style={{marginRight: '3%'}}>
                            <h4>Health Center</h4>
                            <img className="img-responsive" src="resources/images/HEALTH_k.png" style={{marginTop: '37px', marginBottom: '38.5px'}}/>
                            <h5>Total progress:</h5>
                            <div className="progress">
                                <div className="progress-bar progress-bar-info" role="progressbar" aria-valuemin={0} aria-valuemax={100} style={{borderRadius: '5px', width: Math.min(100, Math.floor(100*(this.props.numStudents/400)))}}>
                                    {Math.min(100, Math.floor(100*(this.props.numStudents/400)))}%
                                </div>
                            </div>
                        </div>
                        {/*</div>*/}
                        {/*<div className="col-md-12">*/}
                        <div className="col-md-2" style={{marginRight: '3%'}}>
                            <h4>Entertainment Center</h4>
                            <img className="img-responsive" src="resources/images/ENTERTAINMENT_k.png" style={{marginBottom: '28px'}}/>
                            <h5>Total progress:</h5>
                            <div className="progress">
                                <div className="progress-bar progress-bar-info" role="progressbar" aria-valuemin={0} aria-valuemax={100} style={{borderRadius: '5px', width: Math.min(100, Math.floor(100*(this.props.numStudents/500)))}}>
                                    {Math.min(100, Math.floor(100*(this.props.numStudents/500)))}%
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2" style={{marginRight: '3%'}}>
                            <h4>Football Stadium</h4>
                            <img className="img-responsive" src="resources/images/FOOTBALL%20STADIUM_k.png"/>
                            <h5>Total progress:</h5>
                            <div className="progress">
                                <div className="progress-bar progress-bar-info" role="progressbar" aria-valuemin={0} aria-valuemax={100} style={{borderRadius: '5px', width: Math.min(100, Math.floor(100*(this.props.numStudents/200)))}}>
                                    {Math.min(100, Math.floor(100*(this.props.numStudents/200)))}%
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2" style={{marginRight: '3%'}}>
                            <h4>Baseball Diamond</h4>
                            <img className="img-responsive" src="resources/images/BASEBALL%20DIAMOND_k.png" style={{marginTop: '33px', marginBottom: '34px'}}/>
                            <h5>Total progress:</h5>
                            <div className="progress">
                                <div className="progress-bar progress-bar-info" role="progressbar" aria-valuemin={0} aria-valuemax={100} style={{borderRadius: '5px', width: Math.min(100, Math.floor(100*(this.props.numStudents/300)))}}>
                                    {Math.min(100, Math.floor(100*(this.props.numStudents/300)))}%
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2" style={{marginRight: '3%'}}>
                            <h4>Hockey Rink</h4>
                            <img className="img-responsive" src="resources/images/HOCKEY%20RINK_k.png" style={{marginTop: '41px', marginBottom: '47px'}}/>
                            <h5>Total progress:</h5>
                            <div className="progress">
                                <div className="progress-bar progress-bar-info" role="progressbar" aria-valuemin={0} aria-valuemax={100} style={{borderRadius: '5px', width: Math.min(100, Math.floor(100*(this.props.numStudents/400)))}}>
                                    {Math.min(100, Math.floor(100*(this.props.numStudents/400)))}%
                                </div>
                            </div>
                        </div>
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        );
    }
}