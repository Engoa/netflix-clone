const state = {
  user: [],
};

const saveLS = (key, value) => localStorage.setItem(key, JSON.stringify(value));

const mutations = {
  setUserData(state, payload) {
    state.user = state.user(payload);
  },
};

const actions = {
  setUserData({ commit, state }, payload) {
    commit("setUserData", payload);
    saveLS("user", state.user);
  },
};

const getters = {
  getUserData: (state) => state.User,
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
