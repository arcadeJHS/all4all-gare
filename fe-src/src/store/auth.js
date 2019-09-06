import { firebase } from 'src/boot/firebase';

export default {
  namespaced: true,

  state: {},

  actions: {
    login: () => {
      return new Promise((resolve, reject) => {
        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            resolve(user);
          } else {
            reject(new Error('not authorized'));
          }
        });
        firebase.auth().signInAnonymously();
      }).catch((error) => { console.log('%c %s', 'color:red; font-weight:bold;', `>>> Firebase authentication: ${error.message} <<<`); });
    }
  },

  mutations: {},

  getters: {}
};
