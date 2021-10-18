import React from "react";
import Box3 from "./box3";

// function box2() {
//     return (<div className="box2">
//             <Box3/>
//     </div>)
// }

// export default box2;

class Box2 extends React.Component {
	render() {
		return (
			<div className="box2">
				<Box3 />
			</div>
		);
	}
}

export default Box2;