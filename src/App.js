import React from 'react'
import ReactDOM from 'react-dom'

let values = []
let currentHook = 0

const useState = initialState => {
	if (typeof values[currentHook] === 'undefined') {
		values[currentHook] = initialState
	}

	let hookIndex = currentHook
	const setState = nextValue => {
		values[hookIndex] = nextValue
		ReactDOM.render(<MyName />, document.getElementById('root'))
	}

	return [values[currentHook++], setState]
}

const MyName = () => {
	currentHook = 0

	const [enableFirstName, setEnableFirstName] = useState(false)
	const [name, setName] = useState('')
	const [lastName, setLastName] = useState('')

	const handleChange = evt => {
		setName(evt.target.value)
	}

	const handleLastNameChange = evt => {
		setLastName(evt.target.value)
	}

	const handleEnableChange = () => {
		setEnableFirstName(!enableFirstName)
	}

	return (
		<div
			style={{
				display: 'flex',
				flex: 1,
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
			}}>
			<div>
				<h1>
					My name is: {enableFirstName ? name : ''} {lastName}
				</h1>
				<input
					type="checkbox"
					value={enableFirstName}
					onChange={handleEnableChange}
				/>
				<input type="text" value={name} onChange={handleChange} />
				<input
					type="text"
					value={lastName}
					onChange={handleLastNameChange}
				/>
			</div>
		</div>
	)
}

export default MyName
