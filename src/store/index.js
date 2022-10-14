import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    posts: []
  },
  getters: {
    POSTS(state) {
      return state.posts;
    }
  },
  mutations: {
    SET_POSTS_ALL: (state, posts) => {
      state.posts = posts;
    }
  },
  actions: {
    GET_POSTS_ALL({commit}) {
      return axios('http://176.104.33.48:3200/api/posts', {
        method: "GET"
      })
      .then((posts) => {
        commit('SET_POSTS_ALL', posts.data);
        return posts;
      })
      .catch((error) => {
        console.log(error);
        return error;
      })
    }
  },
  modules: {},
});
