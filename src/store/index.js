import Vue from "vue";
import Vuex from "vuex";
import api from "../services/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // encapsulated fields that can only be accessed by setters (Mutations)
    products: [],
    categories: [],
  },
  getters: {}, // getters are used to get the state but with some conditions (computed)
  mutations: {
    SET_PRODUCTS(state, products) {
      // the setters that can change the state
      state.products = products;
    },
    SET_CATEGORIES(state, categories) {
      state.categories = categories;
    },
  },
  actions: {
    // methods that do the actual work
    async fetchProducts({ commit }, limit) {
      const { data } = await api.get(`/products?limit=${limit}`);
      commit("SET_PRODUCTS", data); // commit is how we call mutations
      // commit(mutationName, new state value)
    },
    async fetchCategories({ commit }) {
      const { data } = await api.get(`/products/categories`);
      commit("SET_CATEGORIES", data);
    },
  },
  modules: {}, // split store into seperate files.
});
