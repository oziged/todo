const newList = {
  namespaced: true,

  state: {
    title: '',
    selectedColor: '#B6E6BD',
    popupColors: ['#B6E6BD', '#FFBBCC', '#42B883', '#FF6464', '#C355F5', '#64C4ED'],
  },

  mutations: { 
    SET_STATE(state, payload) {
      state[payload.key] = payload.value
    }
  },
  actions: { 
    // createList({ commit }, payload) {
// 
    // }
  },
  getters: {  }
}

export default newList