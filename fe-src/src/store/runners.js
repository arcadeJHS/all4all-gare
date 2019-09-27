import { firestore } from 'src/boot/firebase';

export default {
  namespaced: true,

  state: {
    currentRunner: null
  },

  actions: {
    saveRunner: async ({ commit }, { runnerId, runner }) => {
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

      commit('setCurrentRunner', runner);
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

  mutations: {
    setCurrentRunner: (state, runner) => {
      state.currentRunner = runner;
    }
  },

  getters: {
    currentRunner: state => state.currentRunner
  }
};
