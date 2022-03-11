import React, {Component} from "react";
import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details/person-details";
import ErrorIndicator from '../error-indicator/error-indicator'
import SwapiService from '../../services/services';
export default class PeoplePage extends Component {
    swapiService = new SwapiService();
    state = {
        selectedPerson: null,
        hasErr: false
    }
    
    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    }

    componentDidCatch(){
        console.log('error');
        this.setState({
          hasErr: true
        })
    }


    render() {

        if (this.state.hasErr){
            return <ErrorIndicator/>
        }
        return(
            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList onItemSelect={this.onPersonSelected} getData={this.props.getData}/>
                </div>
                <div className="col-md-6">
                    <PersonDetails personId={this.state.selectedPerson} />
                </div>
            </div>
        )
    }
}