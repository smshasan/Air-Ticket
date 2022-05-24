const axios = require('axios');
const options = {
    method: 'GET',
    url: 'https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/prices/direct/',
    params: {destination: 'LED', origin: 'MOW'},
    headers: {
      'X-Access-Token': 'undefined',
      'X-RapidAPI-Host': 'travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com',
      'X-RapidAPI-Key': '3d21601083mshaf9ff96fc0fc647p184db7jsn58a8619c0618'
    }
  };
  
  axios.request(options).then(function (response) {
      console.log(response.data);
  }).catch(function (error) {
      console.error(error);
  });