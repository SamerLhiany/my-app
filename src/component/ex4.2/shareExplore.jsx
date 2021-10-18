import React from "react";

const ShereExplore = (prop) => {
    console.log(prop);
    return (
        <div className = "shareexplore">
            <a href={prop.share}>share</a>
            <a href={prop.explore}>explore</a>
        </div>
    )
}

export default ShereExplore;