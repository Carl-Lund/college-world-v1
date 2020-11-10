import React, {Component} from 'react'
import TraitBox from './TraitBox'


class SchoolTraits extends Component {
    render() {
        return (
            <div>
                <h1 className="card-title boxcontent">{this.props.everything.college.runId} Traits </h1>
                {/*if you want to make the cards adjustable in size, take them out of the div flexbox-container*/}
                <div className="flexbox-container">
                <TraitBox icon={"resources/images/academictrait.png"} label={'Academics:'} rating={this.props.everything.college.academicRating} description = {'Calculated By:\nStudent-Faculty Ratio, ' +
                'Faculty Performance, Faculty Happiness, Academic Building Quality, Student Academic Ability'}/>
                <TraitBox icon={"resources/images/athletictrait.png"} label={'Athletics:'} rating={this.props.everything.college.athleticRating} description = {'Calculated By:\nNumber of Teams, ' +
                'Overall Win Ratio, Quality of Athletic Facilities, Student Athletic Ability, Championships Won'}/>
                <TraitBox icon={"resources/images/infastructuretrait.png"} label={'Infrastructure:'} rating={this.props.everything.college.infrastructureRating} description = {'Calculated By:\n Building Quality ' +
                'Number of Overcrowded Buildings, Number of Building Upgrades'}/>
                <TraitBox icon={"resources/images/safetytrait.png"} label={'Safety:'} rating={this.props.everything.college.safetyRating} description = {'Calculated By:\nStudent Health, Building Quality, Number of ' +
                'Overcrowded Buildings, Riots, Deaths'}/>
                <TraitBox icon={"resources/images/costtrait.png"} label={'Value:'} rating={this.props.everything.college.schoolValue} description = {'Calculated By:\nAverage of School Traits, Tuition'}/>
                <TraitBox icon={"resources/images/socialtrait.png"} label={'Social:'} rating={this.props.everything.college.socialRating} description = {'Calculated By:\nStudent and Faculty Happiness, Sporting Events ' +
                'Student Social Ability'}/>
                </div>
            </div>

        );
    }
}
export default SchoolTraits