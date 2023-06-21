import React from 'react'

export default function ApiFootball() {

    const axios = require("axios");

    const options = {
      method: 'GET',
      url: 'https://api-football-v1.p.rapidapi.com/v3/timezone',
      headers: {
        'X-RapidAPI-Key': '335b498ae1msh041c94b03dd08eap138dc4jsn7ddcebefcf25',
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
  return (
    <div>ApiFootball</div>
  )
}
