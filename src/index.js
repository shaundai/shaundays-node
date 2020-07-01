require("dotenv").config();

const express = require('express');
const app = express();
const axios = require('axios');

const apiKey = '678da8f7dbcf7a5d50a3533a310238d1'

app.listen(4000, () => {
    console.log('server is running on port 4000')
})


app.get('/weather/:lat,:long', (req, res) => {
    getWeather(req.params.lat, req.params.long)
    .then((response) => {
        res.json(response.data)
    })
    .catch((err) => {
        res.status(404).send('there was an error')
    })
})

app.get('/', (req, res) => {
    res.send('hey yall')
    console.log('fish')
})

const getWeather = (lat, long) => {
        return axios.get(`https://api.darksky.net/forecast/${API_KEY}/${lat},${long}`)
}