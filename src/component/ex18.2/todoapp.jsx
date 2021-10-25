import React from 'react';

export const ToDoList = () => {
	const [ ToDos, setToDoShow ] = React.useState([
		{ name: 'CSS', completed: true },
		{ name: 'JavaScript', completed: true },
		{ name: 'Learn React', completed: false },
		{ name: 'Learn mongoDB', completed: false },
		{ name: 'Learn Node JS', completed: false }
	]);

	const ShowKeyObj = ToDos.map((elemt, index) => {
		return (
			<div key={index}>
				{elemt.name}
				<input type="button" value={!elemt.completed ? '✖' : '✔'} onClick={() => CrossName(index)} />{' '}
			</div>
		);
	});

	const CrossName = (index) => {
		const temp = [ ...ToDos ];
		  temp[index].completed = !temp[index].completed;
		   setToDoShow(temp);
           
	};

	
	return (
		<div>
			<p>{ShowKeyObj}</p>
		</div>
	);
};
