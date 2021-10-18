import React from "react";
import ShereExplore from "./shareExplore";
import './style.css'


const Card = (prop) => {
    return (
        <div className="container">
            <img src={prop.src} alt="" />
            <h2>{prop.title}</h2>
            <p>{prop.description}</p>
            <ShereExplore 
            share =  {prop.share}
            explore = {prop.explore} />
            </div>
    )
}

export default Card;