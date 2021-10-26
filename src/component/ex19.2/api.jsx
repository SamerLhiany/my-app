import React from 'react';

export const Apicall = () => {
	const [ apiData, setApiData ] = React.useState([]);
	const [ searchResults, setSearchResults ] = React.useState([]);
	React.useEffect(() => {
		const countries = async () => {
			let result = await (await fetch('https://restcountries.com/v2/all')).json();
			let temp = result.map((element) => {
				return element.name;
			});
			setSearchResults(temp);
			setApiData(temp);
		};

		countries();
	}, []);

	const Texthandler = (event) => {
		const newArr = [ ...apiData ];
		let serchedCountries = newArr.filter((element) => {
			if (element.toLowerCase().includes(event.target.value.toLowerCase())) {
				return true;
			}
			return false;
		});
		setSearchResults(serchedCountries);
	};

	return (
		<div>
			<div>
				search : <input onChange={Texthandler} /> <input type="button" value="Check" />
			</div>
			{searchResults.map((element, ip) => {
				return <li key={ip}>{element}</li>;
			})}
		</div>
	);
};

