const fs = require("fs");

//const content = "Some content!";

const net = require("net");
const conn = net.createConnection({
  host: "example.edu",
  port: 80,
});
conn.setEncoding("UTF8");

conn.on("connect", () => {
  console.log(`Connected to server!`);

  conn.write(`GET / HTTP/1.1\r\n`);
  conn.write(`Host: example.edu\r\n`);
  conn.write(`\r\n`);
});

conn.on("data", (data) => {
  fs.writeFile("./files/test.txt", data, (err) => {
    if (err) {
      console.error(err);
      return;
    } else {
      console.log("wrote file successfully");
    }
    //file written successfully
  });
  conn.end();
});
