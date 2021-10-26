import React from "react";

export const Btn = (props) => {
   



    return (
        <div>
            <input type="button" value={props.value} onClick={props.OnBtnClick}/>
        </div>
    );
} 