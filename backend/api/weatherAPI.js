const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly',
  params: {lat: '35.5', lon: '-78.5'},
  headers: {
    'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com',
    'X-RapidAPI-Key': '3d21601083mshaf9ff96fc0fc647p184db7jsn58a8619c0618'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});