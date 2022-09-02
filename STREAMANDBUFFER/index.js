const http = require("http");
const fs = require("fs");
const server = http.createServer();
server.on("request", (req, res) => {
  //old method
  //   fs.readFile("input.txt", (err, data) => {
  //     if (err) return console.log(err);
  //     res.end(data);
  //   });

  //streaming method
//   const rstream = fs.createReadStream("input.txt");
//   rstream.on("data",(chunkdata)=>{
//       res.write(chunkdata);
//   });
//   rstream.on('end',()=>{res.end()})


//pipe method  best method
  const rstream = fs.createReadStream("input.txt");
  rstream.pipe(res);


});
server.listen(5000, "127.0.0.1");
