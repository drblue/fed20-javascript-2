import React from 'react'

const Joke = ({ joke }) => {
	return (
		<div>
			<p className="setup fs-2">{joke.setup}</p>
			<p className="punchline fs-4"><strong>{joke.punchline}</strong></p>
		</div>
	)
}

export default Joke
