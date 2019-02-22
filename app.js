const express = require('express');
const bodyParser = require('body-parser');
const pizza = require('./src/routes/pizza.route');
const config = require("./src/config/db/db");
const app = express();


config.db;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/pizza', pizza);

let port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log('Server is up and running on port number: ' + port);
});