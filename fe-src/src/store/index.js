import Vue from 'vue';
import Vuex from 'vuex';
import auth from './auth.js';
import races from './races.js';
import runners from './runners.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    races,
    runners
  },

  // enable strict mode (adds overhead!)
  // for dev mode only
  strict: process.env.DEV
});
