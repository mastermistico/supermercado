const express = require("express");
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv/config');


app.use(bodyParser.json());

//Import Routes
const productRoute = require('./routes/products');

app.use('/products',productRoute);

//ROUTES
app.get('/',(req,res) =>{
    res.send('we home');
});


//Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true,
      useUnifiedTopology: true  }, () => 
    console.log('connected to DB')
);

app.listen(3000);