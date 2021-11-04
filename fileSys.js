const fs = require("fs");
const isValid = require("is-valid-path");

const { FILENAME } = require("./constants");

const myFileWriter = (body) => {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  if (isValid(FILENAME)) {
    fs.access(FILENAME, (err) => {
      if (err) {
        console.log("The file does not exist. Writing file...");
        writeFile(body);
        rl.close();
      } else {
        console.log("The file exists.");
        rl.question(
          "Do you want to overwrite the existing file? [Y/N]",
          (answer) => {
            if (answer === "y" || answer === "yes") {
              writeFile(body);
            } else {
              console.log("Very well then, goodbye!");
            }
            rl.close();
          }
        );
      }
    });
  } else {
    console.log("invalid file name");
    rl.close();
  }

  const writeFile = (file) => {
    fs.writeFile("./files/test3.html", body, (err) => {
      if (err) {
        console.error(err);
        return;
      } else {
        console.log("wrote file successfully");
      }
    });
  };
};

module.exports = { myFileWriter };
