import React from 'react';

class SelectTool extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            mAge: props.mAge
        }
    }
    render() {
        return (
            <div onChange={(e) => this.props.onChange(this.props.objKey,e.target.value)}>
                {Array.from(Array(this.state.mAge).keys()).map(element =>{
                    return <option key={element+1} value={element+1}>{element+1}</option>
                })}
            </div>
        )
    }
}

export default SelectTool;