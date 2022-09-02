// const url=require('url');
import http from "http";
import fs from "fs";
// const http = require("http");

const server = http.createServer((req, res) => {
  // res.end("hi from other side ");

  const data = fs.readFileSync("./userapi/userApi.json", "utf-8");
  const objdata = JSON.parse(data);
  console.log(req.url);
  if (req.url == "/") {
    res.end("hi from home side ");
  } else if (req.url == "/about") {
    res.end("hi from about side ");
  } else if (req.url == "/contact") {
    res.end("hi from contact side ");
  } else if (req.url == "/userApi") {
    console.log(objdata)
    res.end(objdata.name);
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("<h1> 404: error  <h1>");
  }
});

server.listen(7000, "127.0.0.1", () => {
  console.log("listing to server port 7000");
});
