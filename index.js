const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

//connect database

mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true },
    () => console.log('connected to database')
);

//Middleware
app.use(express.json());


//import routes
const authRoute = require('./routes/auth');

//Router middleware
app.use('/api/user', authRoute);


app.listen(3000, () => console.log('Server Up and running'));