const request = require('request');
//const fs = require('fs');

const catBreed = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${catBreed[0]}`, (error, response, body) => {
  
  const data = JSON.parse(body);
  if (!data.length) {
    console.log("Breed not found");
  } else {
    console.log(data[0].description);
  }

  if (error) {
    console.error('resquest failed: ', error);
  }
   
});



