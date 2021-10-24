import React,{useState} from "react";


const InputCheckBox = (props) => {
    const [trueOrFalse,setTrueOrFasle]=useState(props.checked)
    return (
    <>
    {props.textBeforeBox}: <input type="checkbox" checked={trueOrFalse} onChange={(e)=>{
        if (trueOrFalse) {
            setTrueOrFasle(false)
        }
        else {
            setTrueOrFasle(true)
        }
    }} />
    {/* {props.textBeforeBox}<input  type="checkbox" defaultChecked={props.checked} ></input> */}
    </>
    );
    }

export default InputCheckBox;


