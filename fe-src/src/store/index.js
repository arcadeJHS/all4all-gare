import Vue from 'vue';
import Vuex from 'vuex';
import races from './races.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    races
  },

  // enable strict mode (adds overhead!)
  // for dev mode only
  strict: process.env.DEV
});
