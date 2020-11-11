import React, {Component} from 'react'
import Button from "react-bootstrap/Button";
import "./tips.css"

export default class TipsBox extends Component{
    constructor(props) {
        super(props);
        this.nextPage = this.nextPage.bind(this);
        this.state = {
            page: 0,
            currentTip: this.props.tips[0]
        }
    }

    nextPage() {
        if(this.state.page < this.props.tips.length - 1) {
            this.state.page = this.state.page + 1
        }
        else {
            this.state.page = 0
        }
        this.setState({ currentTip: this.props.tips[this.state.page]});
    }

    render(){
        return (
            <div class="tips-box">
                <h3 className="tips-header">{this.props.name} Tips</h3>
                <h5 className="tips-text">{this.state.currentTip}</h5>
                <Button className="tips-button" variant="primary" onClick={this.nextPage}>Next Tip</Button>
            </div>
        );
    }
}