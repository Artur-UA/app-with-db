import React, {Component} from "react";
import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details/person-details";
import ErrorIndicator from '../error-indicator/error-indicator'
import SwapiService from '../../services/services';

class ErrorBoudry extends Component {
    state = {
        hasErr: false
    }
    
    componentDidCatch(){
        this.setState({
          hasErr: true
        })
    }

    render() {

        if(this.state.hasErr){
            return <ErrorIndicator/>
        }
        return this.props.children; //вернет все то что получил изначально
    }


}

const Row = ( {left, right} ) => {
    return (
        <div className="row mb2">
            <div className="col-md-6">
                {left}
            </div>
            <div className="col-md-6">
                {right}
            </div>
        </div>
    )
}
export default class PeoplePage extends Component {
    swapiService = new SwapiService();
    state = {
        selectedPerson: null
    }
    
    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    }

    render() {

        if (this.state.hasErr){
            return <ErrorIndicator/>
        }
        return(
            /* <div className="row mb2">
                <div className="col-md-6">
                    <ItemList onItemSelect={this.onPersonSelected} getData={this.props.getData} renderItem={this.props.renderItem}/>
                </div>
                <div className="col-md-6">
                    <PersonDetails personId={this.state.selectedPerson} />
                </div>
            </div> */

            <Row left={ <ItemList onItemSelect={this.onPersonSelected} getData={this.props.getData} renderItem={this.props.renderItem}/>} right={ <ErrorBoudry> <PersonDetails personId={this.state.selectedPerson} /> </ErrorBoudry>} />
        )
    }
}