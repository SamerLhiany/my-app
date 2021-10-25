import React from 'react';

class UserInput extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                {this.props.askFor} <input type='text' onChange={(e) => this.props.onChange(this.props.objKey,e.target.value)}></input>
            </div>
        )
    }
}

export default UserInput;