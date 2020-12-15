import React from 'react';
import { withRouter} from 'react-router-dom';
import "./Launch.css"
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class CollegeOpenCreate extends React.Component {

    constructor(props) {
        super(props);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.loadCollege = this.loadCollege.bind(this);
        this.newCollege = this.newCollege.bind(this);
        this.deleteCollege = this.deleteCollege.bind(this);
        this.state = { busy : false }; // status used to 'disable' buttons
    }

    handleOnChange(e) {;
        this.props.setCollegeName(e.target.value);
    }

    loadCollege(e) {
        const Swal = require('sweetalert2')
        if (this.props.collegeName === "") {
            Swal.fire("You must enter a college name")
            return;
        }
        this.setState({busy:true})
        this.props.setLaunchStatus('loadingInProgress')
        console.log("Loading college");
        const address = 'http://localhost:8080/enccollegeworld_war_exploded/rest/everything/'+ this.props.collegeName;
        console.log(address);
        fetch(address)
            .then(response => response.json())
            .then(data => {this.props.replaceEverything(data);})
            .catch(err => {
                console.log(err);
                Swal.fire('College named "' + this.props.collegeName + '" could not be loaded.');
                this.setState({busy:false})
                this.props.setLaunchStatus('collegeNotChosen')
            });

        const { history } = this.props;
        if (history) history.push('/college');
    }

    render() {
        const collegeName = this.props.collegeName;
        return (
            <Container>
                <Row className="myAuto" md={4}>
                    <Col md={3} sm={7}>
                        <Row>
                            <img alt="logo_big" className="imageLandingPageLogo" src="resources/images/logo_big.png"/>
                        </Row>
                        <Row md="3">
                            <Col md="3">
                                <input className="editText" type="text" value={collegeName} onChange={this.handleOnChange} placeholder="College Name.."/>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="3">
                                <Button variant="primary" disabled={this.state.busy} onClick={() => {this.state.busy? console.log("stop it") : this.loadCollege()}}>{this.state.busy? 'Please wait' : 'Load'}</Button>
                            </Col>
                            <Col sm="1"/>
                            <Col sm="3" >
                                <Button variant="info" disabled={this.state.busy} onClick={() => {this.state.busy? console.log("stop it") :this.newCollege()}}>{this.state.busy? 'Please wait' : 'New College'}</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="6">
                                <Button variant="danger" disabled={this.state.busy} onClick={() => {this.state.busy? console.log("stop it") : this.deleteCollege()}}>{this.state.busy? 'Please wait' : 'Delete College'}</Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={1}>
                        <img className="imageLandingPageWallpaper" src="resources/images/landing_page_wallpaper.png" alt="decorative"/>
                    </Col>
                </Row>
            </Container>
        );
    }

    newCollege(){
        if (this.props.collegeName === "") {
            //On Error- show message
            const Swal = require('sweetalert2')
            Swal.fire("You must enter a college name")
            return;
        }

        const addNewCollege = [
            {collegeName: this.props.collegeName , actionId: "CREATE_COLLEGE"}
        ];

        console.log(JSON.stringify(addNewCollege))

        var responseFromServer

        this.setState({busy:true})
        fetch('http://localhost:8080/enccollegeworld_war_exploded/rest/createOrDeleteCollege/',
            {
                method: 'POST',
                body: JSON.stringify(addNewCollege)
            }
        )
            .then(response => response.json())
            .then(data => {
                responseFromServer = data.title
                console.log('Selected: ' + data.ok)
                console.log('Sesdsdd: ' + data.title)
                this.setState({busy:false})
                if (responseFromServer === "COLLEGE_EXIST"){
                    const Swal = require('sweetalert2')
                    Swal.fire("The college already exists")
                    return
                }
                this.loadCollege()
            });
    }

    deleteCollege(){
        if (this.props.collegeName === "") {
            //On Error- show message
            const Swal = require('sweetalert2')
            Swal.fire("You must enter a college name")
            return;
        }

        const addNewCollege = [
            {collegeName: this.props.collegeName , actionId: "DELETE_COLLEGE"}
        ];

        console.log(JSON.stringify(addNewCollege))

        var responseFromServer

        fetch('http://localhost:8080/enccollegeworld_war_exploded/rest/createOrDeleteCollege/',
            {
                method: 'POST',
                body: JSON.stringify(addNewCollege)
            }
        )
            .then(response => response.json())
            .then(data => {
                responseFromServer = data.title
                console.log('Selected: ' + data.ok)
                console.log('Sesdsdd: ' + data.title)
                if (responseFromServer === "COLLEGE_DOES_NOT_EXIST"){
                    const Swal = require('sweetalert2')
                    Swal.fire("The college does not exist")
                    return
                }
                const Swal = require('sweetalert2')
                Swal.fire("College Deleted Successfully!")

                this.props.replaceEverything("")
                this.props.setCollegeName("");
            });
    }

}

export default withRouter(CollegeOpenCreate);