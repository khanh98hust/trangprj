import Vue from "vue";
import Vuex from "vuex";
import api from "../service/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    async GET_PRODUCT(state) {
      state.products = (await api.get("products")).data;
    }
  },
  actions: {
    getProduct({ commit }) {
      commit("GET_PRODUCT");
    }
  },
  getters: {
    allProduct(state) {
      return state.products;
    }
  }
});
