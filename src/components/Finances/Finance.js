import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FinanceTable from "../Finances/FinanceTable";
import FinanceLog from "./FinanceLog";
import FinanceLoanContract from "./FinanceLoanContract";
import FinanceLoanTable from "./FinanceLoanTable";
import ExpensesGraph from "./ExpensesGraph";
import FinancesGraph from "./FinancesGraph";

export default class Finance extends React.Component {

    render() {

        return (
            <div className="card-deck my-3">
                <h1 className="finance-header">College Finances</h1>
                <Container>
                    <Row>
                        <Col className= "left" sm={4}><FinanceTable everything={this.props.everything} replaceEverything={this.props.replaceEverything}/></Col>
                        <Col sm={4}><FinancesGraph everything={this.props.everything}/></Col>
                        <Col sm={4}><ExpensesGraph everything={this.props.everything}/></Col>
                    </Row>
                    <Row>
                        <Col className= "left" sm={4}><FinanceLog everything={this.props.everything}/></Col>
                        <Col sm={4}><FinanceLoanContract everything={this.props.everything} replaceEverything={this.props.replaceEverything}/></Col>
                        <Col sm={4}><FinanceLoanTable className="table" everything={this.props.everything} replaceEverything={this.props.replaceEverything}/></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}