const fs = require("fs");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const myFileWriter = (body) => {
  fs.access("./files/test3.html", (err) => {
    if (err) {
      console.log("The file does not exist. Writing file...");
      writeFile(body);
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

  const writeFile = (file) => {
    fs.writeFile("./files/test3.html", body, (err) => {
      if (err) {
        console.error(err);
        return;
      } else {
        console.log("\nwrote file successfully");
      }
      //file written successfully
    });
  };
};

module.exports = { myFileWriter };
