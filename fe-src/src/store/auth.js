import { firebase } from 'src/boot/firebase';

export default {
  namespaced: true,

  state: {},

  actions: {
    login: () => {
      return new Promise((resolve, /* reject */) => {
        firebase.auth().onAuthStateChanged(async (user) => {
          if (user) {
            resolve(user);
          } else {
            await firebase.auth().signInAnonymously();
            // reject(new Error('not authorized'));
          }
        });
      }).catch((error) => {
        console.log('%c %s', 'color:red; font-weight:bold;', `>>> Firebase authentication: ${error.message} <<<`);
      });
    }
  },

  mutations: {},

  getters: {}
};
