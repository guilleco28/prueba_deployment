// var http = require("http");
// var server = http.createServer(function(request, response) {
//   response.writeHead(200, {"Content-Type": "text/html"});
//   response.write("Hello!!!");
//   response.end();
// });

//server.listen(8888,'192.168.0.100', function(){})

const express = require('express')
const app = express()
app.get('/', (req, res) => {
  res.send('HEY!')
})
app.listen(3000, () => console.log('Server running on port 3000'))