const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();

const apiKey = '7f0a8ccd238f4fbd9327aafab0ba171f';

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index', { weather: null, error: null });
});

app.post('/', function(req, res) {
    let city = req.body.city;
    let url = `https://api.weatherbit.io/v2.0/current?city=${city}&key=${apiKey}`;

    request(url, function(err, response, body) {
        if (err) {
            res.render('index', { weather: null, error: 'Error, please try again' });
        } else {
            let weather = JSON.parse(body);
            if (weather.data[0] == undefined) {
                res.render('index', { weather: null, error: 'Error, please try again' + body });
            } else {
                let weatherText = `It's ${weather.data[0].temp} degrees in ${weather.data[0].city_name}!`;
                res.render('index', { weather: weatherText, error: null });
            }
        }
    });
});
app.get('/login', function(req, res) {
    res.render('firstPage', { weather: null, error: null });
});
app.get('/chatbot', function(req, res) {
    res.render('chatbot', { title: "Medi-Care", error: null });
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});