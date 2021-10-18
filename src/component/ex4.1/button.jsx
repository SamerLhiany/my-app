import React from "react";

const Btn = (prop) => {
    console.log(prop);
    return (
        <input type="button" value={prop.name} style = {{fontWeight:prop.style1}}/>
    )
}

export default Btn;