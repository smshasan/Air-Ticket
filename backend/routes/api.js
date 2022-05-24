// const weatherAPI= require('../api/weatherAPI');


const express = require('express');
const weatherAPI = require('../api/weatherAPI');
const router = express.Router();


router.route('/weather').get(weatherAPI)


console.log(weatherAPI);


module.exports = router;