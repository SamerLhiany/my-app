import React from 'react';
import Box2 from './box2';
import './style.css';

class Box1 extends React.Component {
	render() {
		return (
			<div className="box1">
				<Box2 />
			</div>
		);
	}
}

// function box1() {
//     return (<div>
//         {
//             <div className="box1">
//                 <Box2/>
//             </div>
//         }
//     </div>)
// }

export default Box1;
