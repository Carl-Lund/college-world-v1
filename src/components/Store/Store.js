import React from 'react';
import App from "../App/App";

export default class Store extends React.Component {

    constructor(props) {
        super(props);
        this.buyItem = this.buyItem.bind(this);
    }

    buyItem(e) {
        console.log("BUYING ITEM")
        let item = e.target.value;
        //this.props.setLaunchStatus('loadInProgressxxxxxx');
        const address = 'http://localhost:8080/enccollegeworld_war_exploded/rest/store/' +this.props.everything.college.runId + '/' +this.props.everything.store[item].name;
        console.log(address);
        fetch(address)
            .then(response => response.json())
            .then(data => {
            });
        this.props.everything.store[item].isPurchased = true;
        this.props.replaceEverything(this.props.everything);
    }

    render() {
        try{
            let allItems = []
            let itemTile = []
            let aRow = []
            // add button functionality + disable if unable to purchase
            for (let i = 0; i < this.props.everything.store.length; i++) {
                itemTile = []
                // user cant afford item
                if (this.props.everything.college.availableCash < this.props.everything.store[i].cost) {
                    itemTile.push(
                        <div className="card text-center text-muted my-3">
                            <img className="card-img-top" src={"resources/images/" + this.props.everything.store[i].imageName} height="50"
                                 width="50"></img>
                            <div className="card-body">
                                <h4 className="card-title">{this.props.everything.store[i].name}</h4>
                                <p className="card-text">{this.props.everything.store[i].description}</p>
                                <p className="card-text text-danger">${this.props.everything.store[i].cost}</p>
                            </div>
                            <div className="card-footer">
                                <input type="submit" className="btn btn-info" name="buyItem" value="Buy" disabled></input>
                            </div>
                        </div>
                    )
                }
                // user level is not high enough
                else if (this.props.everything.store[i].gateNum > this.props.everything.college.gate){

                    itemTile.push(
                        <div className="card text-center text-muted my-3">
                            <img className="card-img-top" src={"resources/images/" + this.props.everything.store[i].imageName} height="50"
                                 width="50"></img>
                            <div className="card-body">
                                <h4 className="card-title">{this.props.everything.store[i].name}</h4>
                                <p className="card-text">{this.props.everything.store[i].description}</p>
                                <p className="card-text text-muted">${this.props.everything.store[i].cost}</p>
                            </div>
                            <div className="card-footer">
                                <input type="submit" className="btn btn-info" name="buyItem" value={"Locked Until Level " +this.props.everything.store[i].gateNum} disabled></input>
                            </div>
                        </div>
                    )
                }
                // already purchased
                else if(this.props.everything.store[i].isPurchased){
                    itemTile.push(
                        <div className="card text-center text-muted my-3">
                            <img className="card-img-top" src={"resources/images/" + this.props.everything.store[i].imageName} height="50"
                                 width="50"></img>
                            <div className="card-body">
                                <h4 className="card-title">{this.props.everything.store[i].name}</h4>
                                <p className="card-text">{this.props.everything.store[i].description}</p>
                                <p className="card-text">${this.props.everything.store[i].cost}</p>
                            </div>
                            <div className="card-footer">
                                <input type="submit" className="btn btn-info" name="buyItem" value="Purchased" disabled></input>
                            </div>
                        </div>
                    )
                }
                else{
                    itemTile.push(
                        <div className="card text-center my-3">
                            <img className="card-img-top" src={"resources/images/" +this.props.everything.store[i].imageName} height="50" width="50"></img>
                            <div className="card-body">
                                <h4 className="card-title">{this.props.everything.store[i].name}</h4>
                                <p className="card-text">{this.props.everything.store[i].description}</p>
                                <p className="card-text text-success">${this.props.everything.store[i].cost}</p>
                            </div>
                            <div className="card-footer">
                                <button type="submit" className="btn btn-info" onClick={this.buyItem} name="buyItem" value={i}>Buy</button>
                            </div>
                        </div>
                    )
                }

                aRow.push(itemTile)

                if ((i+1)%3 == 0 ){
                    allItems.push(<div className="card-deck">{aRow}</div>)
                    aRow = []
                }
                else if (i+1 == this.props.everything.store.length){
                    allItems.push(<div className="card-deck">{aRow}</div>)
                }
            }
            return(
                <div className="container">
                    {allItems}
                </div>
            );

    }catch(error)
       {
            return(
               <div class="store-main">
                    IM BROKEN.
                </div>
            );
        }

    }
}
