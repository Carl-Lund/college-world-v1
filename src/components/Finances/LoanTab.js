import React from 'react';
import "./finances.css"
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class LoanTab extends React.Component {
    constructor(props) {
        super(props);
        this.makePayment = this.makePayment.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.state = {
            amount: 0,
        }
    }

    makePayment() {
        const address = "http://localhost:8080/enccollegeworld_war_exploded/rest/college/" + this.props.everything.college.runId + "/makePayment/" + encodeURI(this.amount) + "/" + encodeURI(this.props.num)
        fetch(address)
            .then(response => response.json())
            .then(data => {this.props.replaceEverything(data);
            });
    }

    handleOnChange(e) {
        this.amount = e.target.value;
    }

    render() {
        const debt = "$" + this.props.loans.value;
        const interest = this.props.loans.interest + "%";
        const weeklyPayment = "$" + this.props.loans.weeklyPayment;

        return (
            <li>
                <div className="loan-tab">
                    <h5>Debt: {debt}</h5>
                    <h5>Interest rate: {interest}</h5>
                    <h5>Weekly Payment: {weeklyPayment}</h5>
                    <Form>
                        <Form.Group controlId="loan-form-tab">
                            <Form.Control onChange={this.handleOnChange} type="loan" placeholder="Amount" />
                            <Button className="form-button" variant="success" onClick={this.makePayment}>Make Payment</Button>
                        </Form.Group>
                    </Form>
                </div>
            </li>
        );
    }
}
