import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index.js'
import router from './router'
import 'bootstrap/dist/js/bootstrap.bundle.min'


window.axios = require('axios');


const app = createApp(App);
app.use(router).use(store).mount('#app')
