const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const rp = require('request-promise');
const port = 3001;
const _weatherAPIKey = 'ecf5b4f4bec0ddd540b60cd345d2b50f';

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/weather', (req, res) => {

    console.log(req.query)
    
    let city = req.query.city;
    let countryCode = req.query.country;
    rp(`http://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&APPID=${_weatherAPIKey}`)
        .then((data) => {
            console.log('the data is ready to be sent to the client');
            console.log(data);
            res.json(data);
        })
        .catch(console.error);
})


app.get('/', (req, res) => {
    res.end('Info');
})

app.listen(port, (err) => {
    if(err) {
        console.error(err);
    }
    console.log(`Listen on port ${port}`);
})