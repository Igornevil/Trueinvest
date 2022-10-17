import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    posts: [],
    post: []
  },
  getters: {
    POSTS(state) {
      return state.posts;
    },
    POST(state) {
      return state.post;
    }
  },
  mutations: {
    SET_POSTS_ALL: (state, posts) => {
      state.posts = posts;
    },
    SET_POSTS_ID: (state, post) => {
      state.post = post;
    },
  },
  actions: {
    GET_POSTS_ALL({commit}) {
      return axios.get('http://176.104.33.48:3200/api/posts')
      .then((posts) => {
        commit('SET_POSTS_ALL', posts.data);
        return posts;
      })
      .catch((error) => {
        console.log(error);
        return error;
      })
    },

    GET_POSTS_ID({commit}, id) {
      return axios.get('http://176.104.33.48:3200/api/posts/' + id)
      .then((post) => {
        commit('SET_POSTS_ID', post.data);
        return post;
      })
      .catch((error) => {
        console.log(error);
        return error;
      })
    },

    SET_POSTS({}, sendForm) {
      axios({
        method: 'POST',
        url: 'http://176.104.33.48:3200/api/posts',
        data: sendForm,
        headers: {
          "Content-type": "multipart/form-data"
        }
      })
      .then(function(response) {
        console.log('Ответ сервера успешно получен!');
        window.location.reload() // window.location.reload()
      })
      .catch(function(error) {
        console.log(error);
      })
    }
  },
  modules: {},
});
