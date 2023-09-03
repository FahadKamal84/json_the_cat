const request = require('request');
//const fs = require('fs');



const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    const data = JSON.parse(body);
    if (!data.length) {
      callback(error, null);
    } else {
      callback(error, data[0].description);
    }
  });
      

};

module.exports = { fetchBreedDescription };

/*
const data = JSON.parse(body);
  if (!data.length) {
    console.log("Breed not found");
  } else {
    console.log(data[0].description);
  }

  if (error) {
    console.error('resquest failed: ', error);
  }

  */