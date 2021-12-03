import useStreamDocument from './useStreamDocument'

const useGetTodo = id => {
	return useStreamDocument('todos', id)
}

export default useGetTodo
