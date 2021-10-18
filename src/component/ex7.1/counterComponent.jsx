import React from "react";

class Sumplusone extends React.Component {
    constructor (props) {
        super(props)
        this.state = {x : 0 }
    }

    plusone = () => {
        this.setState({
           x : this.state.x+1
        })
    }

    render () {
        return ( <div>
            <input type="button" value="increment" onClick = {this.plusone} />
            <span>
                {this.state.x}
            </span>
        </div>   )
    }
}

export default Sumplusone;
