import React, { Component } from "react";

import Header from "../header/header";
import PeoplePage from "../peoplePage/peoplePage";
import RandomPlanet from "../random-planet/random-planet";
import ErrorIndicator from '../error-indicator/error-indicator'
import SwapiService from '../../services/services';
export default class App extends Component{

  swapiService = new SwapiService();

  state={
    selectedPerson: null,
    hasErr: false
  }

  componentDidCatch(){
    console.log('error');
    this.setState({
      hasErr: true
    })
  }
    render(){
      
      if (this.state.hasErr){
        return <ErrorIndicator/>
      }


        return (
          <div>
            <Header />
            <RandomPlanet />

            <PeoplePage 
              getData={this.swapiService.getAllPeople} 
              renderItem={ (item) => `${item.name} (${item.gender}, ${item.birthYear})` } 
              getPictures={this.swapiService.getPersonImage} 
              getInfo={this.swapiService.getPerson} 
            />

            <PeoplePage 
              getData={this.swapiService.getAllPlanets} 
              renderItem={ (item) => `${item.name} - Diameter : ${item.diametr}`} 
              getPictures={this.swapiService.getPlanetImage} 
              getInfo={this.swapiService.getPlanet}
            />

            <PeoplePage 
              getData={this.swapiService.getAllStarships} 
              renderItem={ (item) => `${item.name} - Model : ${item.model}`} 
              getPictures={this.swapiService.getStarshipImage} 
              getInfo={this.swapiService.getStarship} 
            />

          </div>
        );
    }
}