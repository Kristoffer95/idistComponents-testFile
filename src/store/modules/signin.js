import { createSetters } from 'map-state-vmodel'

// initial state
const state = {
  email: null,
  // password: null
};

// getters
const getters = {};

// actions
const actions = {};

// mutations
const mutations = {
  ...createSetters(state)
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
