import React from "react";
import './Styles/CardContainer.css'

export default function CardContainer(props){
    return(
        <div className="cardContainer" id="cardContainer">
            {props.children}
        </div>
    )
}