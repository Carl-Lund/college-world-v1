import React from 'react';
import "./finances.css"
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class LoanTab extends React.Component {

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
                            <Form.Control type="loan" placeholder="Amount" />
                            <Button className="form-button" variant="success">Make Payment</Button>
                        </Form.Group>
                    </Form>
                </div>
            </li>
        );
    }
}