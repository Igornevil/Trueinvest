import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import { connect } from "mongoose";

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@cluster0.iwtbv.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log('MongoDB connected'))
.catch(error => console.log(error))

connect(
    "mongodb://localhost:27017/usersdb",
    {
      useNewUrlParser: true
    }
  );


// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://admin:admin@cluster0.iwtbv.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

// const {MongoClient} = require('mongodb')

// const client = new MongoClient('mongodb+srv://admin:admin@cluster0.iwtbv.mongodb.net/?retryWrites=true&w=majority')

// const start = async () => {
//     try {
//          await client.connect()
//          console.log('Соединение установлено')
//     } catch {
//         console.log('ошибка соединения (', e, ')');
//     }
// }

// start()

const app = createApp(App);
app.use(router).mount('#app')
