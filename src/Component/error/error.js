import React from "react";

import './error.css';
import icon from './star_wars_logo_PNG43.png'

const ErrMsg = () =>{
    return(
        <div className="errorDiv">
            <img className="errorImg" src={icon} alt="error-msg" />
            <p className="textErr">We have a problem, but we will fix it soon.</p>
        </div>
    )
}

export default ErrMsg;