import React from 'react';
import { withRouter} from 'react-router-dom';

class CollegeOpenCreate extends React.Component {

    constructor(props) {
        super(props);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.loadCollege = this.loadCollege.bind(this);
    }

    handleOnChange(e) {;
        this.props.setCollegeName(e.target.value);
    }

    loadCollege(e) {
        if (this.props.collegeName == "")
            return;

        console.log("Loading college");
        const address = 'http://localhost:8080/enccollegeworld_war_exploded/rest/everything/'+ this.props.collegeName;
        console.log(address);
        fetch(address)
            .then(response => response.json())
            .then(data => {this.props.replaceEverything(data);
           });

        const { history } = this.props;
        if (history) history.push('/college');
    }

    render() {
        const collegeName = this.props.collegeName;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-3">
                        <div className="well well-sm">
                            College
                            <input type="text" value={collegeName} onChange={this.handleOnChange}/>
                            <button onClick={this.loadCollege}>Load</button>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default withRouter(CollegeOpenCreate);