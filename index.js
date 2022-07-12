
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://admin:admin@cluster0.iwtbv.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);


const start = async () => {
  try {
    await client.connect()
    console.log('Connect is done')
    // await client.db().createCollection('users')
    const users = client.db().collection('users')
    await users.insertOne({name: 'ulbi tv1', age: 25})
    const user = await users.findOne({name: 'ulbi tv1'})
    console.log(user)
  } catch (e) {
    console.log(e)
  }
}

start()
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// }

//);

