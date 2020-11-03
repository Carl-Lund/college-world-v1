import React, {Component} from 'react'
import Card from 'react-bootstrap/Card';



class TraitBox extends Component{

    render(){
        return(
            <Card className="traitBox"style={{ width: '15m' }}>
                <Card.Header>{this.props.label}</Card.Header>
                <Card.Img variant="top" src={this.props.icon} />
                <Card.Body>
                    <Card.Title>{this.props.rating}</Card.Title>
                    <Card.Text>
                        Describe what makes up the score for each of these traits.
                    </Card.Text>
                    {/*<Button variant="primary">Go somewhere</Button>*/}
                </Card.Body>
            </Card>
            // <div className="traitBox">
            //     <div className="boxcontent">
            //         <img className="traits-icon" src={this.props.icon}></img>
            //         <h3> {this.props.label}</h3>
            //         <h4>{this.props.rating}</h4>
            //     </div>
            // </div>
            )
    }
}
export default TraitBox