// Here we will utilize the axios library to perform GET/POST requests
var axios = require("axios");

// Exporting an object with methods for retrieving and posting data to our API
module.exports = {
  // Returns a promise object we can .then() off inside our Parent component
  getArticles: function() {
  	var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
  	var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
  authKey + "&q=aids";

    return axios({
    	method: 'get',
    	url: queryURLBase,
    }).then(function(response){
    	console.log(response)
    })
  },
  // Also returns a promise object we can .then() off inside our Parent component
  // This method takes in an argument for what to post to the database
  saveArticles: function(clickData) {
    return axios.post("/api", clickData);
  }
};
