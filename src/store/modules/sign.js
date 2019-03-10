import { createSetters } from 'map-state-vmodel'

// initial state
const state = {
  user: {
    email: '',
    password: '',
    fullname: '',
    phone: ''
  },
  users: [],
  show: true,
};

// getters
const getters = {};

// mutations
const mutations = {
  ...createSetters(state),
  
  addUser(state, user){
    // state.user = ''
    state.users.unshift(user)
  }
};

// actions
const actions = {
  commitAddUser({state, commit}) {
    commit('addUser', state.user)
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
