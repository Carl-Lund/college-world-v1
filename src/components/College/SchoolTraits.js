import React, {Component} from 'react'
import TraitBox from './TraitBox'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";


class SchoolTraits extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col className={"col-sm-4"}>
                            <TraitBox icon={"resources/images/academictrait.png"} label={'Academics:'} rating={this.props.everything.college.academicRating} description = {'Calculated By:\nStudent-Faculty Ratio, ' +
                            'Faculty Performance, Faculty Happiness, Academic Building Quality, Student Academic Ability'}/>
                        </Col>
                        <Col className={"col-sm-4"}>
                            <TraitBox icon={"resources/images/athletictrait.png"} label={'Athletics:'} rating={this.props.everything.college.athleticRating} description = {'Calculated By:\nNumber of Teams, ' +
                            'Overall Win Ratio, Quality of Athletic Facilities, Student Athletic Ability, Championships Won'}/>
                        </Col>
                        <Col className={"col-sm-4"}>
                            <TraitBox icon={"resources/images/infastructuretrait.png"} label={'Infrastructure:'} rating={this.props.everything.college.infrastructureRating} description = {'Calculated By:\n Building Quality ' +
                            'Number of Overcrowded Buildings, Number of Building Upgrades'}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col className={"col-sm-4"}>
                            <TraitBox icon={"resources/images/safetytrait.png"} label={'Safety:'} rating={this.props.everything.college.safetyRating} description = {'Calculated By:\nStudent Health, Building Quality, Number of ' +
                            'Overcrowded Buildings, Riots, Deaths'}/>
                        </Col>
                        <Col className={"col-sm-4"}>
                            <TraitBox icon={"resources/images/costtrait.png"} label={'Value:'} rating={this.props.everything.college.schoolValue} description = {'Calculated By:\nAverage of School Traits, Tuition'}/>
                        </Col>
                        <Col className={"col-sm-4"}>
                            <TraitBox icon={"resources/images/socialtrait.png"} label={'Social:'} rating={this.props.everything.college.socialRating} description = {'Calculated By:\nStudent and Faculty Happiness, Sporting Events ' +
                            'Student Social Ability'}/>
                        </Col>
                    </Row>
                </Container>
            </div>

        );
    }
}
export default SchoolTraits