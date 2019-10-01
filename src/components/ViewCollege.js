import React from 'react';
import Navbar from "./Navbar";

export default class ViewCollege extends React.Component {
    render() {
        return (
            <div>
                <h2>This is the overall college view.</h2>
            <Navbar />
            </div>
        );
        /*
        <Navbar />
        return <h2>This is the overall college view.</h2>;
        */
    }
}