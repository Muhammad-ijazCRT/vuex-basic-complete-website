export default {
  state: () => ({
    todos: [
      { id: 1, text: 'ijazkhan', done: true },
      { id: 2, text: 'adnan', done: false },
      { id: 3, text: 'abrar', done: true },
      { id: 4, text: 'khan shaib', done: true },
      { id: 5, text: 'aziz', done: false }
    ]
  }),
  mutations: {},
  getters: {
    get_todoes_list (state) {
      return state.todos
    },
    doneTodos (state) {
      return state.todos.filter(todo => todo.done)
    },
    doneTodosCount (state, getters) {
      return getters.doneTodos.length
    },
    getTodoById: (state) => (id) => {
      return state.todos.find(todo => todo.id === id)
    }
  },
  actions: {}
}
