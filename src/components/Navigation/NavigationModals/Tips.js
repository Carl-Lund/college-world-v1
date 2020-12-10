import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import TipsBox from "../../College/TipsBox";
import "../../College/tips.css"

export default class Tips extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        this.currentName = "";
        this.currentTips = "";
        let dashboard = /^http:[/][/]localhost:[0-9][0-9][0-9][0-9][/]college$/;
        let traits = /^http:[/][/]localhost:[0-9][0-9][0-9][0-9][/]schooltraits$/;
        let students = /^http:[/][/]localhost:[0-9][0-9][0-9][0-9][/]students$/;
        let admissions = /^http:[/][/]localhost:[0-9][0-9][0-9][0-9][/]admissions$/;
        let buildings = /^http:[/][/]localhost:[0-9][0-9][0-9][0-9][/]building$/;
        let sports = /^http:[/][/]localhost:[0-9][0-9][0-9][0-9][/]sports$/;
        let faculty = /^http:[/][/]localhost:[0-9][0-9][0-9][0-9][/]faculty$/;
        let finances = /^http:[/][/]localhost:[0-9][0-9][0-9][0-9][/]finances$/;
        let objectives = /^http:[/][/]localhost:[0-9][0-9][0-9][0-9][/]objectives$/;
        let store = /^http:[/][/]localhost:[0-9][0-9][0-9][0-9][/]store$/;
        let about = /^http:[/][/]localhost:[0-9][0-9][0-9][0-9][/]about$/;

        if(dashboard.test(window.location.href) === true){
            this.currentName = "General Tips";
            this.currentTips = this.props.everything.college.collegeTips.generalTips;
        }
        else if(traits.test(window.location.href) === true){
            this.currentName = "Student Trait Tips";
            //This should be changed to Student Trait Tips Later once they are made
            //on the backend
            this.currentTips = this.props.everything.college.collegeTips.generalTips;
        }
        else if(students.test(window.location.href) === true){
            this.currentName = "Social Tips";
            this.currentTips = this.props.everything.college.collegeTips.socialTips;
        }
        else if(admissions.test(window.location.href) === true){
            this.currentName = "Admissions Tips";
            this.currentTips = this.props.everything.college.collegeTips.admissionsTips;;
        }
        else if(buildings.test(window.location.href) === true){
            this.currentName = "Building Tips";
            let buildingTips = this.props.everything.college.collegeTips.safetyTips.concat(this.props.everything.college.collegeTips.infrastructureTips);
            this.currentTips = buildingTips;
        }
        else if(sports.test(window.location.href) === true){
            this.currentName = "Sports Tips";
            this.currentTips = this.props.everything.college.collegeTips.athleticTips;
        }
        else if(faculty.test(window.location.href) === true){
            this.currentName = 'Academic Tips';
            this.currentTips = this.props.everything.college.collegeTips.academicTips;
        }
        else if(finances.test(window.location.href) === true){
            this.currentName = "Value Tips";
            this.currentTips = this.props.everything.college.collegeTips.valueTips;
        }
        else if(objectives.test(window.location.href) === true){
            this.currentName = "Objectives Tips";
            //This should be changed to Objective Tips Later once they are made
            //on the backend
            this.currentTips = this.props.everything.college.collegeTips.generalTips;
        }
        else if(store.test(window.location.href) === true){
            this.currentName = "General Tips";
            this.currentTips = this.props.everything.college.collegeTips.generalTips;
        }
        else if(about.test(window.location.href) === true){
            this.currentName = "General Tips";
            this.currentTips = this.props.everything.college.collegeTips.generalTips;
        }

        return (
            <Modal show={this.props.show} onHide={this.props.handleClose}
                   backdrop="static"
                   keyboard={false}
                   aria-labelledby="contained-modal-title-vcenter">
                <Modal.Header closeButton>
                    <Modal.Title  id="contained-modal-title-vcenter">
                        {this.currentName}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <TipsBox everything = {this.props.everything} tips = {this.currentTips}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}