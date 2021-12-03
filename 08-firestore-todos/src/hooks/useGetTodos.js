import useGetCollection from './useGetCollection'

const useGetTodos = () => {
	return useGetCollection('todos')
}

export default useGetTodos
