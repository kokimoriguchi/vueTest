import { createStore } from "vuex";

export default createStore({
  state: { count: 100 },
  mutations: {
    increment(state) {
      state.count += 100;
    },
    decrement(state) {
      state.count -= 100;
    },
  },
  actions: {},
  modules: {},
});
