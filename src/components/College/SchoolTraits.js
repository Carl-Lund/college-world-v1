import React, {Component} from 'react'
import TraitBox from './TraitBox'


class SchoolTraits extends Component {
    render() {
        return (
            <div>
                <h1 className="card-title boxcontent">{this.props.everything.college.runId} Traits </h1>
                {/*if you want to make the cards adjustable in size, take them out of the div flexbox-container*/}
                <div className="flexbox-container">
                <TraitBox icon={"resources/images/academictrait.png"} label={'Academics:'} rating={this.props.everything.college.academicRating}/>
                <TraitBox icon={"resources/images/athletictrait.png"} label={'Athletics:'} rating={this.props.everything.college.athleticRating}/>
                <TraitBox icon={"resources/images/infastructuretrait.png"} label={'Infrastructure:'} rating={this.props.everything.college.infrastructureRating}/>
                <TraitBox icon={"resources/images/safetytrait.png"} label={'Safety:'} rating={this.props.everything.college.safetyRating}/>
                <TraitBox icon={"resources/images/costtrait.png"} label={'Value:'} rating={this.props.everything.college.schoolValue}/>
                <TraitBox icon={"resources/images/socialtrait.png"} label={'Social:'} rating={this.props.everything.college.socialRating}/>
                </div>
            </div>

        );
    }
}
export default SchoolTraits