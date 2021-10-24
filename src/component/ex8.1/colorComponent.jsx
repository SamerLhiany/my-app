import React from 'react';

class FavoriteColor extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			favoriteColor: 'samer'
		};
	}
	componentDidMount = () => {
		setTimeout(() => {
            
			this.setState({
				favoriteColor: 'red'
			});
            document.querySelector('#samer').innerText = this.state.favoriteColor;
		}, 1000);
	};

	componentDidUpdate = () => {
		setTimeout(() => {
			if (this.state.favoriteColor == 'red') {
				this.setState({
					favoriteColor: 'green'
                    
				});
                document.querySelector('#samer').innerText = this.state.favoriteColor;
			}
		},1000);
	};
	render() {
		return (
			<div>
				<h1>My favorite color is {this.state.favoriteColor}</h1>
				<div id="samer" />
			</div>
		);
	}
}

export default FavoriteColor;
