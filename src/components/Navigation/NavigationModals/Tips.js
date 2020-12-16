import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import TipsBox from "../../College/TipsBox";
import "../../College/tips.css"

export default class Tips extends React.Component {
    render() {
        this.currentName = "";
        this.currentTips = "";
        let currentUrl = window.location.href;
        if(currentUrl.endsWith("college")){
            this.currentName = "General Tips";
            this.currentTips = this.props.everything.college.collegeTips.generalTips;
        }
        else if(currentUrl.endsWith("schooltraits")){
            this.currentName = "Student Trait Tips";
            //This should be changed to Student Trait Tips Later once they are made
            //on the backend
            this.currentTips = this.props.everything.college.collegeTips.generalTips;
        }
        else if(currentUrl.endsWith("students")){
            this.currentName = "Social Tips";
            this.currentTips = this.props.everything.college.collegeTips.socialTips;
        }
        else if(currentUrl.endsWith("admissions")){
            this.currentName = "Admissions Tips";
            this.currentTips = this.props.everything.college.collegeTips.admissionsTips;;
        }
        else if(currentUrl.endsWith("building")){
            this.currentName = "Building Tips";
            let buildingTips = this.props.everything.college.collegeTips.safetyTips.concat(this.props.everything.college.collegeTips.infrastructureTips);
            this.currentTips = buildingTips;
        }
        else if(currentUrl.endsWith("sports")){
            this.currentName = "Sports Tips";
            this.currentTips = this.props.everything.college.collegeTips.athleticTips;
        }
        else if(currentUrl.endsWith("faculty")){
            this.currentName = 'Academic Tips';
            this.currentTips = this.props.everything.college.collegeTips.academicTips;
        }
        else if(currentUrl.endsWith("finances")){
            this.currentName = "Value Tips";
            this.currentTips = this.props.everything.college.collegeTips.valueTips;
        }
        else if(currentUrl.endsWith("objectives")){
            this.currentName = "Objectives Tips";
            //This should be changed to Objective Tips Later once they are made
            //on the backend
            this.currentTips = this.props.everything.college.collegeTips.generalTips;
        }
        else if(currentUrl.endsWith("store")){
            this.currentName = "General Tips";
            this.currentTips = this.props.everything.college.collegeTips.generalTips;
        }
        else if(currentUrl.endsWith("about")){
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