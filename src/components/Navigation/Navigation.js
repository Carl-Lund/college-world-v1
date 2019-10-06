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
                            <li className="active"><a href="College">
                                Acorn</a></li>
                            <li><a href="students">Students</a></li>
                            <li><a href="building">Buildings</a></li>
                            <li><a href="sports">Sports</a></li>
                            <li><a href="faculty">Faculty</a></li>
                            <li><a href="objectives">Objectives</a></li>
                            <li><a href="store">Store</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}