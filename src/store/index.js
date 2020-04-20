import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoLists: [
      {
        title: 'Front-end',
        todos: [
          {
            title: 'Find job',
            editing: false,
            completed: false
          }
        ]
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
