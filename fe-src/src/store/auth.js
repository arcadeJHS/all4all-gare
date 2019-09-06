import { firebase } from 'src/boot/firebase';

export default {
  namespaced: true,

  state: {
    authorized: false
  },

  actions: {
    login: ({ commit }) => {
      return new Promise((resolve, reject) => {
        firebase.auth().onAuthStateChanged(async (user) => {
          if (user) {
            commit('authorize');
            return resolve(user);
          }
          return reject(new Error('not authorized'));
        });
        firebase.auth().signInAnonymously();
      });
    }
  },

  mutations: {
    authorize: (state) => {
      state.authorized = true;
    }
  },

  getters: {
    authorized: state => state.authorized
  }
};
