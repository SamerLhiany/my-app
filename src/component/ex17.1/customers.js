import axios from 'axios';
import react from 'react';
import React, { useEffect } from 'react';
import './style.css';

export const Customers2 = () => {
	const [ state, setstate ] = React.useState([]);
	const [ names, setNames ] = React.useState('');
	React.useEffect(() => {
		axios.get('https://6177fd139c328300175f5cd8.mockapi.io/customers2').then((res) => {
			setstate(res.data);
			console.log(res.data);
		});
	}, []);
	const deleteHandler = async (id) => {
		const deleteRes = await axios.delete('https://6177fd139c328300175f5cd8.mockapi.io/customers2/' + id);
		if (deleteRes.status === 200) {
			const stateList = [ ...state ];
			let resultOfNonDeleted = stateList.filter((user) => {
				return user.id !== id;
			});
			setstate(resultOfNonDeleted);
		}
	};
	const nameHandler = (e) => {
		setNames(e.target.value);
	};
	const addNamesHandler = async () => {
		if (names.trim().length !== 0) {
			let data = {
				name: names
			};
			const res = await axios.post('https://6177fd139c328300175f5cd8.mockapi.io/customers2/', data);
			console.log('post :', res);
			let newData = res.data;
			const stateList = [ ...state ];
			stateList.push(newData);
			setstate(stateList);
			setNames('');
		}
	};
	return (
		<div className="container">
			<div>
				<h1>Customers</h1>
				<input className="input" onChange={nameHandler} placeholder="Enter a Name" />{' '}
				<input className="btn" type="button" onClick={addNamesHandler} value="Add Customers" />
			</div>
			{state.map((element) => {
				return (
					<li key={element.id}>
						{element.name}{' '}
						<input
							type="button"
							onClick={() => {
								deleteHandler(element.id);
							}}
							value="Delete"
						/>
						<img src={element.avatar} alt="Girl in a jacket" width="100" height="100" />
					</li>
				);
			})}
		</div>
	);
};
