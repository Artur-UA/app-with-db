import React, { Component } from 'react';

import './random-planet.css';
import SwapiService from '../../services/services';
import Spiner from "../spiner/spiner";
export default class RandomPlanet extends Component {

  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true
  }
  constructor(){
    super();
    this.updatePlanet();
    /* setInterval(() => this.updatePlanet(), 4000); */
  }

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false
    });
  }

  updatePlanet(){
    const id = Math.floor(Math.random() * 15) + 2;
    console.log(id);
    this.swapiService.getPlanet(id)
      .then(this.onPlanetLoaded);
  }

  
  render() {
    /* if (this.state.loading){
      return <Spiner/>
    } */

    const spiner = this.state.loading ? <Spiner/> : <PlanetView planet={this.state.planet}/>;

    return (
      <div className="random-planet jumbotron rounded">
        {spiner}
        
      </div>
    );
  }
}


const PlanetView = (planet) => {
  console.log(planet);
  return (
    <React.Fragment>
      <img className="planet-image"
             src={`https://starwars-visualguide.com/assets/img/planets/${planet.planet.id}.jpg`} />
      <div>
        <h4>{planet.planet.name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{planet.planet.population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{planet.planet.rotation}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{planet.planet.diametr}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  )
}