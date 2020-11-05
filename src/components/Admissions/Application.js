import React from 'react';
import './Admissions.css';
import { Button } from 'react-bootstrap';

export default class Application extends React.Component {
    render() {
        return (
            <div className="Application">
                <h2>Application</h2>
                <div className="col-1">
                    <div>Name: Marty Fillman</div>
                    <div>Location: Scranton, PA, USA</div>
                    <div>Nature: Angry</div>
                    <div>Traits: Horseback riding, Croquet, Strangling</div>
                    <div>GPA: 3.8</div>
                    <div>Athletic Ability: 3</div>
                    <div className="buttons-2"><Button variant="success">Accept</Button>
                        <Button variant="danger">Decline</Button>
                    </div>
                </div>
            </div>
        );
    }

}