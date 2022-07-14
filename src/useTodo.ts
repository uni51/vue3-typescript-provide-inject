import { InjectionKey, ref } from "vue"

type Todo = {
	id: number,
	title: string,
}

const defaultTodos = [{ id: 0, title: 'first' }, { id: 1, title: 'second' }]

export const todos = (() => {
	const todos = ref<Todo[]>(defaultTodos)

	const addTodo = (title: string) => {
		const newTodo: Todo = {
			id: Math.random(),
			title,
		}
		todos.value.push(newTodo)
	}

	return { todos, addTodo }
})()

type TodosType = typeof todos

// InjectionKeyを使うことで、キー自体に型の定義を含めることが可能
// Symbolを使うことで、一意な（重複しない）値を生成する
export const todoKey: InjectionKey<TodosType> = Symbol('useTodos')
