import useGetDocument from './useGetDocument'

const useGetTodo = id => {
	return useGetDocument('todos', id)
}

export default useGetTodo
