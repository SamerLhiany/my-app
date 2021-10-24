import React from 'react';
import './style.css';

class Boxchange extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
            background : 'red',
            borderRadius : '0'
		};
	}
	componentDidMount = () => {
		setTimeout(() => {
			this.setState({
                background : 'yellow'
			});
		}, 500);
        setTimeout(() => {
			this.setState({
                background : 'blue',
			});
		}, 1000);
		setTimeout(() => {
			this.setState({
                background : 'black'
			});
		}, 1500);
		setTimeout(() => {
			this.setState({
                background : 'orange'
			});
        },2000);

        setTimeout(() => {
        this.setState({
            borderRadius : '50px'
        });

        },2500);
	};

	// componentDidUpdate = () => {
           
        
	// };
    
	render() {
		return( 
        <div className="styles" style={{width:'100px', height:'100px', background:this.state.background, borderRadius:this.state.borderRadius}}>
           
        </div>)
	}
}


export default Boxchange;