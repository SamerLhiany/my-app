import React from "react";
import Box2 from "./box2";
import './style.css'

function box1() {
    return (<div>
        {
            <div className="box1">
                <Box2/>
            </div>
        }
    </div>)
}

export default box1;