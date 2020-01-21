const http = require('http');
const fs = require('fs');

const urls = {
   '/': 'Views/Home/index.html'
   
};

const server = http.createServer((req, res) => {
   console.log('Server running');
   const url = req.url;
   console.log(url);
   if (url in urls) {
      fs.readFile(urls[url], function(err, data) {
         res.writeHead(200, {'Content-Type': 'text/html'});
         res.write(data);
         res.end();
       });
   } else {
      fs.readFile('404.html', function(err, data) {
         res.writeHead(404, {'Content-Type': 'text/html'});
         res.write(data);
         res.end();
       });
   }
});

server.listen(8080);