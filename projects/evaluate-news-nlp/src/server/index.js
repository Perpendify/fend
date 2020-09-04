var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const { request } = require('express');
const axios = require("axios");

const app = express()
app.use(cors());

// app.use(express.static('dist'))
app.use(express.static('src/client/views'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})


app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// var textapi = new meaningCloud({
//     // application_id: "your-api-id",
//     application_key: process.env.API_KEY;
//   });

// console.log(`Your API key is ${process.env.API_KEY}`);z

app.get('/sentiment', (req, res) => {
    var params = {
        key: process.env.API_KEY,
        lang: "en",
        txt: req.query.text,
    };
    axios({
        url: 'https://api.meaningcloud.com/sentiment-2.1',
        method: "POST",
        params: params,
      })
        .then((response) => {
          res.status(200).json(response.data);
        })
        .catch((error) => {
          res.status(500).json(error);
        });
})


// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
   })

module.exports = {app};
