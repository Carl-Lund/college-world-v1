import React from 'react';

export default class Navigation extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="viewCollege">
                                Acorn</a></li>
                            <li><a href="viewStudent">Students</a></li>
                            <li><a href="viewBuilding">Buildings</a></li>
                            <li><a href="viewSports">Sports</a></li>
                            <li><a href="viewFaculty">Faculty</a></li>
                            <li><a href="viewGates">Objectives</a></li>
                            <li><a href="viewStore">Store</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}