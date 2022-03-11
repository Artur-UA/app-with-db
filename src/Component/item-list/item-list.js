import React, { Component } from 'react';
import Spiner from '../spiner/spiner';
import './item-list.css';


export default class ItemList extends Component {

  state = {
    itemLists: null
  };


  componentDidMount() {

    const { getData } = this.props;
    console.log(this.props);
    getData()
      .then((itemList) => {
        this.setState({
          itemLists: itemList
        })
      })
  }

  renderItems(data){
    return data.map(({id, name}) => {
      return (
        <li className="list-group-item" 
          key={id} 
          onClick={ () => this.props.onItemSelect(id) }>
          {name}
        </li>
      );
    });
  }

  render() {

    if(!this.state.itemLists){
      return <Spiner />
    }

    const items = this.renderItems(this.state.itemLists);

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
