import React, { Component } from "react";

import Header from "../header/header";
import PeoplePage from "../peoplePage/peoplePage";
import RandomPlanet from "../random-planet/random-planet";
import ErrorIndicator from '../error-indicator/error-indicator'
export default class App extends Component{

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
            <PeoplePage />
            <PeoplePage />
            <PeoplePage />

            

          </div>
        );
    }
}