import React from 'react';
import FinancesTable from "../Finances/FinanceTable";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FinanceTable from "../Finances/FinanceTable";
import FinanceLog from "./FinanceLog";
import FinanceLoanContract from "./FinanceLoanContract";
import FinanceLoanTable from "./FinanceLoanTable";

export default class Finance extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <div className="card-deck my-3">
                <h1>College Finances</h1>
                <Container>
                    <Row>
                        <Col sm={4}><FinanceTable everything={this.props.everything}/></Col>
                        <Col sm={4}></Col>
                    </Row>
                    <Row>
                        <Col sm={4}>
                            <br></br><br></br>
                        </Col>
                        <Col sm={4}><br></br><br></br></Col>
                    </Row>
                    <Row>
                        <Col sm={4}><FinanceLog everything={this.props.everything}/></Col>
                        <Col sm={4}><FinanceLoanContract everything={this.props.everything} replaceEverything={this.props.replaceEverything}/></Col>

                        <Col sm={4}><FinanceLoanTable className="table" everything={this.props.everything}/></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}