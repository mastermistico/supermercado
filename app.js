const express = require("express");
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv/config');


app.use(bodyParser.json());

//Import Routes
const productRoute = require('./routes/products');
const uri = process.env.PATH_API
app.use(`${uri}/products`,productRoute);

//ROUTES
app.get('/',(req,res) =>{
    res.send('home');
});


//Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true,
      useUnifiedTopology: true  }
);

const connection = mongoose.connection;
connection.once('open', () => {
console.log("MongoDB database connection established successfully");
});

const port_number = app.listen(process.env.PORT || 3000);

app.listen(port_number);