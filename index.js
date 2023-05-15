var axios = require('axios');

let apikey = "";
let exampleQuery = "restaurants in sydney";
let query1 = "laux in bethalto illinois";

var config = {
  method: 'get',
  url: `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query1}&key=${apikey}`,
  headers: { }
};

axios(config)
.then(function (response) {
    let restaurantName = response.data.results[0].name;
    // document.getElementById("restaurant-name").textContent = restaurantName;
    console.log(restaurantName);
  //console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});


