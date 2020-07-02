require("dotenv").config();
//const port = process.env.PORT || 3000;
const weatherApi = process.env.WEATHER_API_KEY;

const express = require('express');
const app = express();
const axios = require('axios');

app.listen(4000, () => {
    console.log('server is running on port 4000')
    console.log(weatherApi)
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
        return axios.get(`https://api.darksky.net/forecast/${weatherApi}/${lat},${long}`)
}