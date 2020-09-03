var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');
dotenv.config();

const app = express()

// app.use(express.static('dist'))
app.use(express.static('src/client/views'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
   })

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// var textapi = new meaningCloud({
//     application_id: "your-api-id",
//     application_key: "your-key"
//   });
console.log(`Your API key is ${process.env.API_KEY}`);
