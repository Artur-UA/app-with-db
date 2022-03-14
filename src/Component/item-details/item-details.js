import React, { Component } from 'react';
import './item-details.css';
import ErrorBtn from '../error-btn/error-btn';

export default class ItemDetails extends Component {

  state = {
    item: null,
    image: null
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

        this.props.getInfo(this.props.personId)
        .then((items) => {
            this.setState({
                item: items,
                image: this.props.getPictures(items)
            })
        })
    }
  render() {
    if(!this.state.item){
        return <span>Select a person from a list</span>;
    }

    const { id, name, gender, eyeColor, birthYear} = this.state.item;

    console.log(this.state);
    return (
      <div className="item-details card">
        <img className="item-image"
          src={this.state.image} 
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