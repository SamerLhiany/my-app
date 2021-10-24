import React from "react";
import InputCheckBox from "./input";

class CheckBox extends React.Component {
    constructor (props) {
        super (props)
    
    }

    render () {
        return (
            <div>

                <InputCheckBox textBeforeBox="I accept the term of the app" checked={true}/>
                <InputCheckBox textBeforeBox="I want to get the weekly news letter" checked={true}/>
                <InputCheckBox textBeforeBox="I want to get sales ane offers" checked={false} />
                <InputCheckBox textBeforeBox="I want to get sales ane offers" checked={false} />
              
                
            </div>
        )
    }
}

export default CheckBox;

