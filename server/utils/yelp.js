"use strict";
require("dotenv").config();

const yelp = require("yelp-fusion");

// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const apiKey = process.env.APIKEY || "<your-api-key>";

const searchRequest = {
  term: "boba",
  location: "westminster, ca",
};

const client = yelp.client(apiKey);

function getBusiness(k) {
  client
    .search(searchRequest)
    .then((response) => {
      for (let i = 0; i < k; i++) {
        const result = response.jsonBody.businesses[i];
        // const prettyJson = JSON.stringify(result, null, 4);
        const prettyJson = JSON.stringify(result.name, null, 4);
        console.log(prettyJson);
      }
    })
    .catch((e) => {
      console.log(e);
    });
}
getBusiness(5);
