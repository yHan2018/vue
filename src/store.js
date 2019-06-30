import Vue from 'vue';
import Vuex from 'vuex';


//  注册vuex
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    appTitle: 'yhan 商城'
  },
  mutations: {
    cutTitle(state, title) {
      console.log('title', title);
      state.appTitle = title;
    }
  },
  getters: {
    getAppTitle(state) {
      console.log(state.appTitle);
      return state.appTitle;
    }
  }
});

export default store;