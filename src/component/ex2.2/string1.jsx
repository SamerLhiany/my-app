import React from "react";

const string = "I love React!";
function String1() {
    return (<div> {`
     The string’s length is ${string.length}` }
    </div>)
}

export default String1;