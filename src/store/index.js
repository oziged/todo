import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeListId: null,
    mode: 'all',
    selectedPopupColor: '#B6E6BD',
    popupColors: ['#B6E6BD', '#FFBBCC', '#42B883', '#FF6464', '#C355F5'],
    todoLists: [
      {
        color: 'red',
        title: 'Front-end',
        id: 0,
        todos: [
          {
            id: 0,
            title: 'Find job',
            editing: false,
            completed: false
          },
          {
            id: 1,
            title: 'Find food',
            completed: false
          }
        ]
      },

      {
        color: 'green',
        title: 'Back-end',
        id: 1,
        todos: [
          {
            id: 1,
            title: 'Find money',
            completed: false
          }
        ]
      }
    ]
  },


  mutations: {
    SET_STATE(state, payload) {
      state[payload.key] = payload.value
    },

    CREATE_TODO_LIST(state, list) {
      state.todoLists.push(list)
    },

    UPDATE_TODO_LIST(state, payload) {
      let todoListIndex = state.todoLists.findIndex(list => list.id == payload.listId)
      Vue.set(state.todoLists, todoListIndex, {...state.todoLists[todoListIndex], ...payload.updateObj})
    },

    DELETE_TODO_LIST(state, id) {
      let todoListIndex = state.todoLists.findIndex(list => list.id == id)
      state.todoLists.splice(id, 1)
    },

    CREATE_TODO_ITEM(state, payload) {
      let todoList = state.todoLists.find(list => list.id == payload.listId).todos
      todoList.push(payload.item)
    },

    UPDATE_TODO_ITEM(state, payload) {
      let todoList = state.todoLists.find(list => list.id == payload.listId).todos
      let todoItemIndex = todoList.findIndex(item => item.id == payload.itemId)
      Vue.set(todoList, todoItemIndex, {...todoList[todoItemIndex], ...payload.updateObj})
    },

    DELETE_TODO_ITEM(state, payload) {
      let todoList = state.todoLists.find(list => list.id == payload.listId).todos
      let todoItemIndex = todoList.findIndex(item => item.id == payload.itemId)
      todoList.splice(todoItemIndex, 1)
    }
  },


  actions: {
    setActiveList ({ commit, state }, payload) {
      if (state.mode === 'all') commit('SET_STATE', {key: 'mode', value: 'one'})
      commit('SET_STATE', {key: 'activeListId', value: payload.value})
    },

    createTodoList({ commit, state }, payload) {
      let list = {
        title: payload.title,
        color: payload.color,
        id: state.todoLists.length,
        todos: []
      }
      
      commit('CREATE_TODO_LIST', list)
      commit('SET_STATE', {key: 'activeListId', value: list.id})
      commit('SET_STATE', {key: 'mode', value: 'one'})
      return list.id
    },

    updateTodoList({ commit }, payload) {
      commit('UPDATE_TODO_LIST', payload)
    },

    deleteTodoList({ commit }, payload) {
      commit('DELETE_TODO_LIST', payload.id)
      commit('SET_STATE', {key: 'mode', value: 'all'})
    },

    createTodoItem({ commit }, payload) {
      let item = {
        id: +new Date(),
        title: payload.title,
        completed: false
      }

      commit('CREATE_TODO_ITEM', {listId: payload.listId, item})
    },

    updateTodoItem({ commit }, payload) {
      commit('UPDATE_TODO_ITEM', payload)
    },

    deleteTodoItem({ commit }, payload) {
      commit("DELETE_TODO_ITEM", payload)
    },
  },


  modules: {
  }
})
