import React from 'react';
import './style.css';

class Spinner extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			display: 'block',
			sec: 5
		};
	}
	componentDidMount() {
		setInterval(() => {
            if (this.state.sec > 1) {
			this.setState({
				sec: this.state.sec-1
			});}
            else{
                this.setState ({
                    sec : null
                })
            }
		}, 1000);

		setTimeout(() => {
			this.setState({
				display: 'none'
			});
		}, 5000);
	}

	render() {
		return (
			<div> 
				<div className="spinerc" style={{ display: this.state.display }} />
                <div>{this.state.sec}</div>
			</div>
		);
	}
}

export default Spinner;

