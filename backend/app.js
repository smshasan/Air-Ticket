const express = require('express');
const app = express();


const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');



app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());


//Import all routes
const auth = require('./routes/userRoutes');
const weatherApi = require('./routes/api')

app.use('/api/v1', auth);
app.use('/api/v1', weatherApi);





module.exports =  app;