var express = require('express');
var app = express();

//user runs appliation and requests for page
//this will get the request and
// responds with the send print statement
app.get("/", function(req, res){
  res.send("Welcome you made it the home page!");
})

app.get("/joker", function(req, res){
  res.send("HELLO JOKER!");
});

//8080 is a port
//starts server
app.listen(8080, function(){
  console.log("Server running on 8080 port");
});
