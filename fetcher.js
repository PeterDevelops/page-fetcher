const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const filePath = process.argv[3];

request(url, (error, response, body) => {
  if (error) console.log(error);
  
  fs.writeFile(filePath, body, (err) => {
    if (err) throw err;
        
  fs.stat(filePath, (err, stats) => {
    if (err) {
      console.error(err);
    }
      console.log(`Downloaded and saved ${stats.size} bytes to ${filePath}`);
    });
  });
});