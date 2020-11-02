import React from 'react';
import "./finances.css"
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class FinanceLoanContract extends React.Component {
    constructor(props) {
        super(props);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.calculateContract = this.calculateContract.bind(this);
        this.createContract = this.createContract.bind(this);
        this.state = {
            amount: 0
        }
    }

    handleOnChange(e) {
        this.amount = e.target.value;
    }

    calculateContract() {
        const address = "http://localhost:8080/enccollegeworld_war_exploded/rest/college/" + this.props.everything.college.runId + "/calculateContract/" + encodeURI(this.amount)
        fetch(address)
            .then(response => response.json())
            .then(data => {
                this.props.replaceEverything(data);
            });
    }


    createContract() {
         const address = "http://localhost:8080/enccollegeworld_war_exploded/rest/college/" + this.props.everything.college.runId + "/createContract/" + encodeURI(this.amount)
         fetch(address)
             .then(response => response.json())
             .then(data => {this.props.replaceEverything(data);
             });
    }

    render() {
        return (
            <div className="finance-col2-row2">
                <h3>Take out a Loan</h3>
                <div className="loan-form">
                    <Form>
                        <Form.Group controlId="formLoan" onChange={this.handleOnChange}>
                            <Form.Label>Loan Amount</Form.Label>
                            <Form.Control type="loan" placeholder="Amount" />
                            <Button className="form-button" onClick={this.calculateContract} variant="success">Make Contract</Button>
                            <Form.Text className="text-muted">Create contract to find out rates.</Form.Text>
                        </Form.Group>
                    </Form>
                </div>
                <h6>Predicted interest rate: {this.props.everything.college.proposedLoan.interest}%</h6>
                <h6>Predicted weekly payment: ${this.props.everything.college.proposedLoan.weeklyPayment}</h6>
                <Button variant="success" className="accept-button" onClick={this.createContract}>Accept</Button>
            </div>
        );
    }
}