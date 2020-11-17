import React from 'react';
import { withRouter} from 'react-router-dom';
import "./Launch.css"

class CollegeOpenCreate extends React.Component {

    constructor(props) {
        super(props);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.loadCollege = this.loadCollege.bind(this);
        this.newCollege = this.newCollege.bind(this);
        this.deleteCollege = this.deleteCollege.bind(this);

    }

    handleOnChange(e) {;
        this.props.setCollegeName(e.target.value);
    }

    loadCollege(e) {
        if (this.props.collegeName === "")
            return;

        console.log("Loading college");
        const address = 'http://localhost:8080/enccollegeworld_war_exploded/rest/everything/'+ this.props.collegeName;
        console.log(address);
        fetch(address)
            .then(response => response.json())
            .then(data => {this.props.replaceEverything(data);
           });

        const { history } = this.props;
        if (history) history.push('/college');
    }

    render() {
        const collegeName = this.props.collegeName;
        return (
            <div className="container">
                <div className="row myAuto">
                    <div className="col-sm-6">
                        <div className="row">
                            <img className="imageLandingPageLogo" src="resources/images/logo_big.png"/>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <input className="editText" type="text" value={collegeName} onChange={this.handleOnChange} placeholder="College Name.."/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <button className="newButtonBlue" onClick={this.loadCollege}>Load</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-3">
                                <button className="newButtonAddCollege" onClick={this.newCollege}>New College</button>
                            </div>
                            <div className="col-sm-3">
                                <button className="newButtonDeleteCollege" onClick={this.deleteCollege}>Delete College</button>
                            </div>
                        </div>

                        {/*<div className="row">*/}
                            {/*<div className="well well-sm">*/}
                                {/*College*/}
                                {/*<input type="text" value={collegeName} onChange={this.handleOnChange}/>*/}
                                {/*<button onClick={this.loadCollege}>Load</button>*/}
                            {/*</div>*/}
                        {/*</div>*/}

                    </div>
                    <div className="col-sm-6">
                        <img className="imageLandingPageWallpaper" src="resources/images/landing_page_wallpaper.png"/>
                    </div>
                </div>
            </div>

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