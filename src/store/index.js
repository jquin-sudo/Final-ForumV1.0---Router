import Vue from "vue";
import Vuex from "vuex";
import categories from "./modules/groups";
import topics from "./modules/subject";
import users from "./modules/users";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    categories,
    topics,
    users,
  },

  state: {
    nextRoute: null,
  },

  actions: {
    setNextRoute({ commit }, { route }) {
      commit("SET_NEXT_ROUTE", { route });
    },
  },

  mutations: {
    SET_NEXT_ROUTE(state, { route }) {
      state.nextRoute = route;
    },
  },
});
