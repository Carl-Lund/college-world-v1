import React from 'react';
import './Admissions.css';
import {Button, Modal} from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import Avatar from "../Avatar";
/**
 * Implemented 11-18-2020 by Matt Cruz
 * mcruz772@mail.endicott.edu
 */
export default class Application extends React.Component {
    render() {
        //Check so things don't blow up
        if(this.props.student === null){
            return <div></div>
        }
        return (
        <Modal show={this.props.show} onHide={this.props.handleClose}
               backdrop="static"
               keyboard={false}
               aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title  id="contained-modal-title-vcenter" style={{textAlign: "center"}}>
                    Application
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <Container className="Application">
                    <div className="row">
                    <div className="col-md-6">
                        <Avatar style={{height: '60px', width: '60px'}} code={this.props.student.avatarCode}/>
                        </div>
                        <div className="col-md-6">
                        <div><b>Name</b>: {this.props.student.fullName}</div>
                        <div><b>Nature</b>: {this.props.student.nature}</div>
                        <div><b>Hobbies</b>: {this.props.student.hobbies[0]}, {this.props.student.hobbies[1]}, {this.props.student.hobbies[2]}</div>
                        <div><b>GPA</b>: {(this.props.student.quality.academics/25.0 + 2.0).toFixed(2)}</div>
                        <div><b>Athletic Ability</b>: {this.props.student.quality.sports}%</div>
                            <div><b>Social Rating</b>: {this.props.student.quality.social}%</div>
                        </div>
                        </div>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={this.props.handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
        );
    }

}