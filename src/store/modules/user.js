const saveLS = (key, value) => localStorage.setItem(key, JSON.stringify(value));
const state = {
  user: {},
};

const mutations = {
  setUserData(state, payload) {
    if (payload) {
      state.user = payload;
    }
  },
  logoutUser(state, payload) {
    if (payload) {
      state.user = payload;
    }
  },
};

const actions = {
  setUserData({ commit, state }, payload) {
    commit("setUserData", payload);
    saveLS("user", state.user);
  },
  logoutUser({ commit, state }, payload) {
    commit("logoutUser", payload);
    saveLS("user", state.user);
  },
};

const getters = {
  getUserData: (state) => state.user,
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
