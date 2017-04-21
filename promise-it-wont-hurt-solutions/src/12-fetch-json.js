var HTTP = require("q-io/http");


HTTP.read('http://localhost:1337').then(function(result){
  console.log(JSON.parse(result));
});


