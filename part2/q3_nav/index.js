var HTMLParser = require("node-html-parser");
var cookie = require("cookie-parser");
var http = require("http");

var options = {
  host: "codequiz.azurewebsites.net",
  path: "/"
};
var request = http.request(options, function (res) {
  
  var data = "";
  res.on("data", function (chunk) {
    data += chunk;
  });
  res.on("end", function () {
    console.log("data : " + data);
    var root = HTMLParser.parse(data);
  });
});

 




 

 



