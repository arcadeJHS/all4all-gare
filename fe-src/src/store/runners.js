import { firestore } from 'src/boot/firebase';

export default {
  namespaced: true,

  state: {},

  actions: {
    saveRunner: async (store, { runnerId, runner }) => {
      const docRef = firestore.collection('runners').doc(runnerId);
      const runnerRef = await docRef.get();

      // verifiy if runner already exists
      if (runnerRef.exists) {
        // exists: UPDATE
        await docRef.update(runner);
      } else {
        // does not exists: CREATE
        await docRef.set(runner);
      }
    },

    getRunnersByRace: async (store, raceId) => {
      const data = await firestore.collection('runners').where('race', '==', raceId).get();

      const runners = [];
      data.forEach((doc) => {
        runners.push({
          id: doc.id,
          ...doc.data()
        });
      });

      return runners;
    }
  },

  mutations: {},

  getters: {}
};
