const saveLS = (key, value) => localStorage.setItem(key, JSON.stringify(value));
const state = {
  myList: [],
};

const mutations = {
  addList(state, payload) {
    state.myList.push(payload);
  },
  setMyList(state, payload) {
    state.myList = payload;
  },
  removeFromlist(state, payload) {
    state.myList.splice(payload, 1);
  },
};

const actions = {
  addList({ commit, state }, payload) {
    commit("addList", payload);
    saveLS("mylist", state.myList);
  },
  setMyList({ commit }, payload) {
    commit("setMyList", payload);
  },
  removeFromlist({ commit, state }, payload) {
    commit("removeFromlist", payload);
    saveLS("mylist", state.myList);
  },
};

const getters = {
  getMyList: (state) => state.myList,
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
