import React, { Component } from 'react';
import ErrMsg from '../error/error'
import './random-planet.css';
import SwapiService from '../../services/services';
import Spiner from "../spiner/spiner";
import ErrorBtn from '../error-btn/error-btn';

export default class RandomPlanet extends Component {

  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
    error: false
  }
  constructor(){
    super();
    this.updatePlanet();
    /* setInterval(() => this.updatePlanet(), 4000); */
    //this.interval = setInterval(() => this.updatePlanet(), 4000);
    //clearInterval(this.interval);
  }



  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false
    });
  }

  onErr = () => {
    this.setState({
      error: true,
      loading: false
    })
  }
  updatePlanet(){
    const id = Math.floor(Math.random() * 15) + 2;
    console.log(id);
    this.swapiService.getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onErr)
  }

  
  render() {

    const hasData = !(this.state.loading || this.state.error)

    const spiner = this.state.loading ? <Spiner/> : null;
    const content = hasData ? <PlanetView planet={this.state.planet}/> : null;
    const errMesg = this.state.error ? <ErrMsg/> : null;

    return (
      <div className="random-planet jumbotron rounded">
        {spiner}
        {content}
        {errMesg}
        
      </div>
    );
  }
}


const PlanetView = (planet) => {
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
        <ErrorBtn/>
      </div>
    </React.Fragment>
  )
}