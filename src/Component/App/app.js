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
            <PeoplePage getData={this.swapiService.getAllPeople}/>
            <PeoplePage getData={this.swapiService.getAllPlanets}/>
            <PeoplePage getData={this.swapiService.getAllStarships}/>

            

          </div>
        );
    }
}