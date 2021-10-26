import React from 'react';
import { Box } from './box';
import { Btn } from './btn';
async function a(){
    const a=await (await fetch("url")).json()

    axios.get("url").then((respone)=>{

    }).catch(reject=>{

    })

}

export const CheckBox = () => {
	const [ CheckBoxNum, setBoxNUm ] = React.useState([ 'one', 'two', 'three', 'four', 'five' ]);

	const HandelDelet = () => {
		console.log('delet');
	};

	const HandelReset = () => {
		console.log('reset');
	};

	return (
		<div>
			<Btn value="Delet" OnBtnClick={HandelDelet} />
			<Btn value="Reset" OnBtnClick={HandelReset} />
			{CheckBoxNum.map(e=>{
                return <div>
                    <Box/> {e}
                </div>
            })}
		</div>
	);
};
