import { firestore } from 'src/boot/firebase';

export default {
  namespaced: true,

  state: {
    races: []
  },

  actions: {
    get: async ({ commit }) => {
      const races = await firestore.collection('races').orderBy('date').get();
      commit('setRaces', races);
    }
  },

  mutations: {
    setRaces: (state, data) => {
      const races = [];
      data.forEach((doc) => {
        races.push({
          id: doc.id,
          ...doc.data()
        });
      });
      state.races = races;
    }
  },

  getters: {
    races: state => state.races,
    raceById: state => id => state.races.find(r => r.id === id)
  }
};
