const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
    return;
  }
  if (req.url === "/about") {
    res.end("Here is our About page");
    return;
  }
  res.end(`
  <h1>Ooops!</h1>
  <p>we can't seem to find the page ypu are looking for</p>
  <a href="/">Back home</a>
  `);
});

server.listen(5000);
