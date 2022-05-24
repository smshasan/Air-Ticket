const app = require('./app');

const dotenv = require('dotenv');

const connectDatabase = require('./config/database');
const express = require('express');

dotenv.config({path: 'backend/config/config.env'});



const PORT = process.env.PORT || 5000;




connectDatabase();


app.get('/', (req, res) => {
    res.send('Alhamdulillah working')
});

app.listen(PORT, () => {
   console.log(`server started at http://localhost:${PORT}`);
})




