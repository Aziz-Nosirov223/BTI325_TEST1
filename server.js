var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();




function onHttpStart() {
    console.log("Express http server listening on port " + HTTP_PORT)
};

app.get("/", function(req, res) {
    var text1 = "<h2>Declaration</h2>";
    text1 += "<p>I declare that this test is my own work in accordance with Seneca Academic Policy. No part of this test has <br> been copied manually or electronically from any other source.</p>";
    text1 += "<p>Name: Aziz Nosirov</p>";
    text1 += "<p>Student Number: 115673188</p>";
    text1 += "<a href='./test1'>Go to Test1<a>";
    res.send(text1);
});



app.get("/test1", function(req, res) {
    var text2 = "<h1>Good luck!</h1>";
    text2 += "<a href='./'>Go Home</a>";
    text2.backgroundColor = "red"
    res.send(text2);
  

});


app.get("/test1File", function(req, res) {
    res.sendFile(path.join(__dirname, "/views/test1.html"));
});

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/"));
});

app.listen(HTTP_PORT, onHttpStart);


