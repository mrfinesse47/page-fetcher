const { myFileWriter } = require("./fileSys");
const isUrl = require("is-valid-http-url");
const { URL } = require("./constants");

const request = require("request");

if (isUrl(URL)) {
  request(URL, (error, response, body) => {
    if (!error) {
      console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
      if (response.statusCode >= 200 && response.statusCode < 300) {
        myFileWriter(body);
      }
    } else {
      console.log("error:", error);
    }
  });
} else {
  console.log("invalid URL goodbye!");
}
