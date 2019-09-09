import { firestore } from 'src/boot/firebase';

export default {
  namespaced: true,

  state: {},

  actions: {
    saveRunner: async (store, { id, runner }) => {
      const docRef = firestore.collection('runners').doc(id);
      const runnerRef = await docRef.get();

      // verifiy if runner already exists
      if (runnerRef.exists) {
        // exists: UPDATE
        await docRef.update(runner);
      } else {
        // does not exists: CREATE
        await docRef.set(runner);
      }
    }
  },

  mutations: {},

  getters: {}
};
