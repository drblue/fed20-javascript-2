import { ListGroup } from 'react-bootstrap'
import { Todo } from '../shared/interfaces'
import { Todos } from '../shared/types'

interface Props {
	todos: Todos,
	onToggleTodo: (todo: Todo) => void,
}

const TodoList: React.FC<Props> = ({ todos, onToggleTodo }) => {
	return (
		<ListGroup role="list">
			{todos.map(todo => {
				const statusClass = todo.completed ? 'completed' : 'not-completed'

				return (
					<ListGroup.Item
						action
						onClick={() => { onToggleTodo(todo) }}
						className={`${statusClass} d-flex justify-content-between align-items-center`}
						key={todo.id}
						role="listitem"
					>
						<span>{todo.title}</span>
					</ListGroup.Item>
				)
			})}
		</ListGroup>
	)
}

export default TodoList
