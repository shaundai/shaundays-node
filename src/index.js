require("dotenv").config();
const port = process.env.PORT || 4000;
const weatherApi = process.env.WEATHER_API_KEY;

const express = require('express');
const app = express();
const axios = require('axios');

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
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
    res.send('weatherApi')
    res.send(weatherApi)
})

const getWeather = (lat, long) => {
        return axios.get(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${weatherApi}/${lat},${long}`)
}