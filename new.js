var http = require('http')

http.createServer((req,req)=>{
    res.write('Hello Everyone');
    res.end();

}).listen(8080,()=>{console.log("created a server succesfully")});