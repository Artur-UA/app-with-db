import React, { Component } from "react";

import Header from "../header/header";
import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details/person-details";
import RandomPlanet from "../random-planet/random-planet";
export default class App extends Component{

  state={
    selectedPerson: null
  }
    
  onPersonSelected = (id) => {
      this.setState({
          selectedPerson: id
      })
  }

    render(){
        return (
          <div>
            <Header />
            <RandomPlanet />
      
            <div className="row mb2">
              <div className="col-md-6">
                <ItemList onItemSelect={this.onPersonSelected}/>
              </div>
              <div className="col-md-6">
                <PersonDetails /* personId={this.state.selectedPerson} */ />
              </div>
            </div>
          </div>
        );
    }
}