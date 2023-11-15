const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = '8080'

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
})

mongoose.connect('mongodb://127.0.0.1:27017/home-delicacy',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("open");
    }).catch(err => {
        console.log("fail");
    });

require('./routes')(app);


app.listen(port, (req, res) => {
    console.log("Server started");
});