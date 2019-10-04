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
                            <li><a href="Students">Students</a></li>
                            <li><a href="Building">Buildings</a></li>
                            <li><a href="Sports">Sports</a></li>
                            <li><a href="Faculty">Faculty</a></li>
                            <li><a href="Objectives">Objectives</a></li>
                            <li><a href="Store">Store</a></li>
                            <li><a href="Building">Buildings</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}