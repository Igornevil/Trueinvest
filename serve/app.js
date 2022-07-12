const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const server = http.createServer((req, res) => {
    console.log('Server request');
    console.log('Just for test');
    
    res.setHeader('Content-Type', 'text/html')

    if(req.url = '/') {
        fs.readFile('../public/index.html', (err, data) => {
            if (err) {
                console.log(err);
                res.end();
            } else {
                res.write(data);
                res.end();
            }
        })
    }

    // res.write('Hello world');
    // res.end();
});

server.listen(PORT, 'localhost', (error) => {
    error ? console.log(error) : console.log(`listen port ${PORT}`);
});









const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://admin:admin@cluster0.iwtbv.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);


const start = async () => {
  try {
    await client.connect()
    console.log('Connect is done')
    // await client.db().createCollection('users')
    const users = client.db().collection('users')
    // await users.insertOne({name: 'ulbi tv1', age: 25})
    const user = await users.findOne({name: 'ulbi tv1'})
    console.log(user)
  } catch (e) {
    console.log(e)
  }
}

start()