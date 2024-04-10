import React, { MouseEvent, ChangeEvent } from 'react';

// const callBack = ():number => {
// 	alert('Привет')
// 	return 12
// }

// window.setTimeout(callBack, 1000);

export const User = () => {
	const deleteUser = (e: MouseEvent<HTMLButtonElement>) => {
		alert(e.currentTarget.name)
	}

	const saveUser = () => {
		console.log('user have been saved')
	}

	const onNameChanged = () => {
		console.log('user have been saved')
	}
	const focusOnLost = () => {
		console.log('focus on lost')
	}
	const onAgeChanged = (e: ChangeEvent<HTMLInputElement>) => {
		console.log('onAgeChanded: ', e.currentTarget.value)
	}
	return (
		<div>
			<textarea
				onChange={onNameChanged}
				onBlur={focusOnLost}
			>Serj
			</textarea>
			<input onChange={onAgeChanged} onBlur={focusOnLost} />
			<button name='delete' onClick={deleteUser}>x</button>
			{/* <button name='save' onClick={deleteUser}>x</button> */}
		</div>
	)
}



