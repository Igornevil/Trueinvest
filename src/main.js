import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import axios from 'axios'
window.axios = require('axios');
import cors from 'cors'


const app = createApp(App);
app.use(router).mount('#app')
