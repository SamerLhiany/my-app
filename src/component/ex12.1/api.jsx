import React from "react";

class Myjoke extends React.Component {
    constructor (props) {
        super(props);
        this.myjoke = this.myjoke.bind(this);

        this.state = {
            norris : ''
        }
    }

    myjoke = async  () =>  {
        
      let joke =await (await fetch(`https://api.chucknorris.io/jokes/random`)).json();
     this.setState ({
        norris : joke
     })
    }
    render () {
        
        let norri = this.state.norris
        return (
            <div>
            <input type="button" value="click for a joke" onClick={this.myjoke} />
            <div>{norri.value}</div>
            </div>)
}}
export default Myjoke;