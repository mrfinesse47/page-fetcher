const { myFileWriter } = require("./fileSys");

const content = "Some content!";

const request = require("request");

request("https://www.example.com/", (error, response, body) => {
  console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
  if (response.statusCode >= 200 && response.statusCode < 300) {
    myFileWriter(body);
  } else {
    console.log("error:", response.statusCode);
  }
});
