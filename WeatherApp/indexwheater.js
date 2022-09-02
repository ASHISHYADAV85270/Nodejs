const fs = require("fs");
const http = require("http");
const requests = require("requests");
const htmldata = fs.readFileSync("index.html", "utf-8");
// console.log(htmldata);

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    requests(
      "https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=917bab2c392da2a8ad2b7690c9675112"
    )
      .on("data", (chunk) => {
        // res.write(htmldata);
        const objdata = JSON.parse(chunk);
        const ardata = [objdata];
        console.log(ardata[0]);

        // console.log(chunk);

        const replaceval = (tempvalue, origvalue) => {
          let temperature = tempvalue.replace(
            "{%tempval%}",
            origvalue.main.temp
          );
          temperature = temperature.replace("{%cityname%}", origvalue.name);
          temperature = temperature.replace(
            "{%weatData%}",
            origvalue.weather[0].description
          );
          if (origvalue.weather[0].description == "clear sky") {
            temperature = temperature.replace(
              "{%imglink%}",
              "https://tse2.mm.bing.net/th?id=OIP.sIJP004f1XFN8BOpxNLM0gHaEs&pid=Api&P=0&w=278&h=176"
            );
          } else {
            temperature = temperature.replace(
              "{%imglink%}",
              "https://clipground.com/images/sunny-clipart-png-9.png"
            );
          }
          // console.log(temperature);
          // return temperature;
          res.write(temperature);
        };

        const realtimedata = ardata.map((val) => {
          // console.log(` ${ardata} ${i}`);
          replaceval(htmldata, val);
        });
        // console.log(realtimedata);
        // console.log(replaceval(htmldata,ardata[0]));

        // res.write(realtimedata);
        // console.log(typeof(realtimedata));
      })
      .on("end", function (err) {
        if (err) return console.log("connection closed due to errors", err);
        res.end();
      });
  }
});

server.listen(8000, "127.0.0.1");
