import React, {Component} from "react";

export default class ErrorBtn extends Component {

    state = {
        falseErr: false
    }
    render(){
        console.log('render');
        if(this.state.falseErr){
            this.foo.bar = 0;
        }

        return(
            <button className="error-button btn btn-danger btn-lg" onClick={ () => this.setState({falseErr: true})}>
                ThrowError
            </button>
        )
    }
}