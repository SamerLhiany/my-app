import React from "react";
import Box4 from './box4';

// const box3 = ()=> {
//     return ( 
//         <div className="box3"> 
//         <Box4/>
//         <Box4/>
        
//         </div>
//     )
// }

// export default box3;

class Box3 extends React.Component {
	render() {
		return (
			<div className="box3">
				<Box4 />
				<Box4 />
			</div>
		);
	}
}

export default Box3;