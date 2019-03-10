import Vue from 'vue';
import Vuex from 'vuex'; Vue.use(Vuex);
import sign from './modules/sign'
import signin from './modules/signin';
import signup from './modules/signup';

export default new Vuex.Store({
  modules: {
    sign,
    signin,
    signup
  }
});
