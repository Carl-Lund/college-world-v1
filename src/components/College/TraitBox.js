import React, {Component} from 'react'
import Card from 'react-bootstrap/Card';



class TraitBox extends Component{
    render(){
        function getColor(value) {
            let temp;
            if (value>=70)
                temp='success';
            else if (value<=66)
                temp='danger';
            else if (value<=33)
                temp='warning';
            return temp;
        }
        let color=getColor(this.props.rating);
        return(
            <Card className="traitBox" border={color}>
                <Card.Header className="label">{this.props.label}</Card.Header>
                <Card.Img className='traits-icon' variant="top" src={this.props.icon} />
                <Card.Body>
                    <Card.Title className="label">{this.props.rating}</Card.Title>
                    <Card.Text className="boxcontent">{this.props.description}</Card.Text>
                </Card.Body>
            </Card>
            )
    }
}
export default TraitBox