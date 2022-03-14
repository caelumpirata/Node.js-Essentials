const express = require('express');
const app = express();

const mongoose = require('mongoose');

const methodOverride = require('method-override')
    app.use(methodOverride('_method'))

const ejsMate = require('ejs-mate')
    app.engine('ejs', ejsMate)
    app.set('view engine', 'ejs');

const path = require('path');
    app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/#####database_name#########', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })










//  SETTING PORT
app.listen(3000, () => {
    console.log("APP IS LISTENING ON PORT 3000!")
})


