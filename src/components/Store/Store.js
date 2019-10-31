import React from 'react';

export default class Store extends React.Component {

    constructor(props) {
        super(props);
        this.buyItem = this.buyItem.bind(this);
    }

    buyItem(e) {
        console.log("BUYING ITEM")
        var item = e.target.value;
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
            // add button functionality + disable if unable to purchase
            for (let i = 0; i < this.props.everything.store.length; i++) {
                itemTile = []
                // user cant afford item
                if (this.props.everything.college.availableCash < this.props.everything.store[i].cost) {
                    itemTile.push(<div align="center" className="col-sm-4">
                        <div className="well store-tile">
                            <img src={"resources/images/" + this.props.everything.store[i].imageName} height="50"
                                 width="50"></img>
                            <h4>{this.props.everything.store[i].name}</h4>
                            <h5>{this.props.everything.store[i].description}</h5>
                            <p class="text-danger">${this.props.everything.store[i].cost}</p>
                            <input type="submit" className="btn btn-info" name="buyItem" value="Buy" disabled></input>
                        </div>
                    </div>)
                }
                // user level is not high enough
                else if (this.props.everything.store[i].gateNum > this.props.everything.college.gate){

                    itemTile.push(<div align="center" className="col-sm-4">
                        <div className="well store-tile">
                            <img src={"resources/images/" + this.props.everything.store[i].imageName} height="50"
                                 width="50"></img>
                            <h4>{this.props.everything.store[i].name}</h4>
                            <h5>{this.props.everything.store[i].description}</h5>
                            <p class="text-muted">${this.props.everything.store[i].cost}</p>
                            <input type="submit" className="btn btn-info" name="buyItem" value={"Locked Until Level " +this.props.everything.store[i].gateNum} disabled></input>
                        </div>
                    </div>)
                }
                // already purchased
                else if(this.props.everything.store[i].isPurchased){
                    itemTile.push(<div align="center" className="col-sm-4">
                        <div className="well store-tile">
                            <img src={"resources/images/" + this.props.everything.store[i].imageName} height="50"
                                 width="50"></img>
                            <h4>{this.props.everything.store[i].name}</h4>
                            <h5>{this.props.everything.store[i].description}</h5>
                            <p class="text-muted">${this.props.everything.store[i].cost}</p>
                            <input type="submit" className="btn btn-info" name="buyItem" value="Purchased" disabled></input>
                        </div>
                    </div>)
                }
                else{
                    itemTile.push(  <div align="center" className="col-sm-4">
                        <div className="well store-tile">
                            <img src={"resources/images/" +this.props.everything.store[i].imageName} height="50" width="50"></img>
                            <h4>{this.props.everything.store[i].name}</h4>
                            <h5>{this.props.everything.store[i].description}</h5>
                            <p class="text-success">${this.props.everything.store[i].cost}</p>
                            <button type="submit" className="btn btn-info" onClick={this.buyItem} name="buyItem" value={i}>Buy</button>
                        </div>
                    </div>)
                }
                allItems.push(itemTile)
            }
            return(
                <div class="store-main">
                    <h2 class="store-header">School Budget: ${this.props.everything.college.availableCash}</h2>

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
