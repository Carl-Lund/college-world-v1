import React from 'react';

export default class Store extends React.Component {
    render() {
        try{
            let allItems = []
            let itemTile = []
            // add button functionality + disable if unable to purchase
            for (let i = 0; i < this.props.everything.store.length; i++) {
                itemTile = []
                itemTile.push(  <div align="center" className="col-sm-4">
                                    <div className="well">
                                        <img src={"resources/images/" +this.props.everything.store[i].imageName} height="50" width="50"></img>
                                        <h4>{this.props.everything.store[i].name}</h4>
                                        <h5>{this.props.everything.store[i].description}</h5>
                                        <p>${this.props.everything.store[i].cost}</p>
                                        <input type="submit" className="btn btn-info" name="buyItem" value="Buy"></input>
                                    </div>
                                </div>)
                allItems.push(itemTile)
            }
            return (
                <div>
                    {allItems}
                </div>
            );

        }catch(error)
        {
            // do whatever
        }

    }
}
