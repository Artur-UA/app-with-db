import React, { Component } from 'react';
import SwapiService from '../../services/services';
import './person-details.css';
import ErrorBtn from '../error-btn/error-btn';

export default class PersonDetails extends Component {
  swapiService = new SwapiService();

  state = {
    person: null
  }

    componentDidMount(){
        this.updatePerson()
    }

    componentDidUpdate(prevProps){
        if (this.props.personId !== prevProps.personId) {
            this.updatePerson();
        }
    }
    updatePerson() {
        if(!this.props.personId){
            return;
        }

        this.swapiService.getPerson(this.props.personId)
        .then((persons) => {
            this.setState({
                person: persons
            })
        })
    }
  render() {
    if(!this.state.person){
        return <span>Select a person from a list</span>;
    }

    const { id, name, gender, eyeColor, birthYear} = this.state.person;

    return (
      <div className="person-details card">
        <img className="person-image"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} 
          alt="picture person"/>

        <div className="card-body">
          <h4>{name} {this.props.personId}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
          <ErrorBtn/>
        </div>
      </div>
    )
  }
}