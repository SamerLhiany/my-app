import React from 'react';
import './style.css'

class Box1 extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
            display : 'none'
		};
	}
	componentDidMount = () => {
		setTimeout(() => {
			this.setState({
                display : 'block'
			});
		}, 1000);
	};

	componentDidUpdate = () => {
		setTimeout(() => {
			this.setState({
				display : 'none'
			});
		}, 4000);
	};
    
	render() {
		return( 
        <div className="styles" style={{width:this.props.width, height:this.props.height, background:this.props.background, display:this.state.display}}>
           box
        </div>)
	}
}


export default Box1;
