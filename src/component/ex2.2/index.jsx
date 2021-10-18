import React from "react";

const data = ["hello", "world"];
function Helloworld() {
    return (<span> {
        data.join(" ")}
    </span>)
}

export default Helloworld;