var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs');

app.get('/', function(request, response) {
    fs.readFile('index.html', function (err, data) {
        if (err) throw err;
        len = data.length
        response.write(data.toString('utf8',0,len));
        response.end();
    });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
