import React from 'react';
import Btn from './button';

const BtnContainer = () => {
	return (
		<div>
			<Btn name="Important" style1="bold" />
			<Btn name="Not Important" />
		</div>
	);
};

export default BtnContainer;
