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
    var text2 = "<h1>Good luck!</h1><br>";
    text2 += "<a href=''>Go Home</a>";
    res.send(text2);
  

});

app.get("/test1File", function(req, res) {
    res.sendFile(path.join(__dirname, "/views/test1.html"));
});

app.listen(HTTP_PORT, onHttpStart);


/*

var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();






// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
    var var_name = '<h2>Name: Aziz Nosirov<br>Student #: 115673188</h2>';
    res.send(var_name);
 //   res.send("Hello World!");
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);

*/