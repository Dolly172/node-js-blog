const http = require("http");

const serverInfo = {
  serverName: "CodeSandBox Server",
  version: "1.0.0",
  currentDate: new Date().toDateString(),
  currentTime: new Date().toTimeString(),
};

// const server = http.createServer((req, res) => {
//   const serverInfo = {
//     serverName: "Crio Server",
//     version: "1.0.0",
//     currentDate: new Date().toDateString(),
//     currentTime: new Date().toTimeString(),
//   };

//   if (req.url === "/status") {
//     res.writeHead(200, { "Content-Type": "application/json" }); //Adding Headers
//     res.write(JSON.stringify(serverInfo));
//     res.end();
//   } else {
//     res.writeHead(200, { "Content-Type": "text/html" }); //Adding Headers
//     res.write(`<h1>Hello from server</h1>`);
//     res.end();
//   }
// });

const { data } = require("./response.json");

const PORT = 8082;

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/": {
      res.write(`<h1>Currency Database</h1>`);
      res.end();
      break;
    }
    case "/currencies": {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(JSON.stringify(data));
      res.end();
      break;
    }
    default: {
      res.writeHead(404);
      res.end();
    }
  }
});

server.listen(PORT, () => {
  console.log("Listening at", PORT);
});
