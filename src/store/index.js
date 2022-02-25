import { createStore } from 'vuex'
import moduleA from './counter/index'
import moduleB from './todos/index'
const store = createStore({
  modules: {
    count: moduleA,
    todo: moduleB
  },
  state () {
    return {
    // count: 0,
    // todos: [
    //   { id: 1, text: 'ijazkhan', done: true },
    //   { id: 2, text: 'adnan', done: false },
    //   { id: 3, text: 'abrar', done: true },
    //   { id: 4, text: 'khan shaib', done: true },
    //   { id: 5, text: 'aziz', done: false }
    // ]
    }
  },
  // muttation of the store
  mutations: {
    // increment (state) {
    //   state.count++
    // },
    // increment_by_payload (state, payload) {
    //   state.count += payload
    // }
  },
  // Actions of the store
  actions: {
    // increment (context) {
    //   context.commit('increment')
    // },
    // incrementAsync (context) {
    //   setTimeout(() => {
    //     context.commit('increment')
    //   }, 1000)
    // }
  },
  // getters
  getters: {
    // get_todoes_list (state) {
    //   return state.todos
    // },
    // doneTodos (state) {
    //   return state.todos.filter(todo => todo.done)
    // },
    // doneTodosCount (state, getters) {
    //   return getters.doneTodos.length
    // },
    // getTodoById: (state) => (id) => {
    //   return state.todos.find(todo => todo.id === id)
    // }
  }
}
)

export default store
