import React from 'react'

const TodoCounter = ({ count }) => {
	const msg = count
		? count === 1
			? <span>You only got 1 thing left to do!</span>
			: <span>You have {count} todos left</span>
		: <span>You have 0 todos 🥳</span>

	return (
		<div className="todo-counter mt-2" data-testid="todo-counter">
			{msg}
		</div>
	)
}

export default TodoCounter
