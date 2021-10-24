import React from 'react';
import './style.css';

class Webview extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			container1: block,
			container2: none
		};
	}

	render() {
		return (
			<div className="container">
				<input type="text" placeholder="Name" />
				<input type="text" placeholder="Last Name" />

				<div className="agecontainer">
					<label for="age">Age:</label>
					<select name="age">
						<option value="0-15">0-15</option>
						<option value="16-25">16-25</option>
						<option value="26-35">26-35</option>
						<option value="36-49">36-49</option>
						<option value="50+">50+</option>
					</select>
				</div>

				<input type="" placeholder="Tell us something we do not know about you" />
				<input type="button" value="Continue" />

				<div className="reviewcontainer">
					<div />
					<div />
					<div />
					<div />
					<div className="buttoncontainer">
						<input type="button" value="Back" />
						<input type="button" value="Send Survey" />
					</div>
				</div>
			</div>
		);
	}
}

export default Webview;
