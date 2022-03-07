import React, { Component } from 'react';
import Spiner from '../spiner/spiner';
import SwapiService from '../../services/services';
import './item-list.css';


export default class ItemList extends Component {
  swapiService = new SwapiService();

  state = {
    peopleLists: null
  };


  componentDidMount() {
    this.swapiService.getAllPeople()
      .then((peopleList) => {
        this.setState({
          peopleLists: peopleList
        })
      })
  }

  renderItems(data){
    console.log(data);
    return data.map(({id, name}) => {
      return (
        <li className="list-group-item" 
          key={id} 
          onClick= {this.props.onItemSelect(id)}>
          {name}
        </li>
      );
    });
  }

  render() {
    console.log(this.state);

    if(!this.state.peopleLists){
      return <Spiner />
    }

    const items = this.renderItems(this.state.peopleLists);

    return (
      <ul className="item-list list-group">
        {/* <li className="list-group-item">
          Luke Skywalker
        </li>
        <li className="list-group-item">
          Darth Vader
        </li>
        <li className="list-group-item">
          R2-D2
        </li> */}
        {items}
      </ul>
    );
  }
}
