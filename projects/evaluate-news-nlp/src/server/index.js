var path = require('path')
const express = require('express')
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const { request } = require('express');
const axios = require("axios");

const app = express()
app.use(cors());

app.use(express.static('dist'))
// app.use(express.static('src/client/views'))

console.log(__dirname)

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
