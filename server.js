const http = require("http");
const fs = require("fs");

const port = 8080;

const server = http.createServer((req, res) => {
  /*
  // lay ra id tu url
  const id = req.url.slice(1);
  // doc file json
  const data = fs.readFileSync("./data/db.json", { encoding: "utf-8" });
  // string => JSON
  const dataJson = JSON.parse(data);
  // get by id
  let dataRes = dataJson.find((prod) => id == prod.id);
  //
  if (!dataRes) {
    dataRes = dataJson;
  }
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  */
  const data = fs.readFileSync("./pages/overview.html", { encoding: "utf-8" });
  const regex = /{{productName}}/i;
  const response = data.replace(regex, "Sweet Mangos");
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(response);
});

server.listen(port, () => {
  console.log(`Server running at ${port}`);
});
