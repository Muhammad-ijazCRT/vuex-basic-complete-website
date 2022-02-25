export default {
  state: () => ({
    count: 0
  }),
  mutations: {
    increment (state) {
      state.count++
    },
    increment_by_payload (state, payload) {
      state.count += payload
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    },
    incrementAsync (context) {
      setTimeout(() => {
        context.commit('increment')
      }, 1000)
    }
  },
  getters: {}
}
