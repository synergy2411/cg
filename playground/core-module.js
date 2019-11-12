const path = require("path");

const url = "http://www.example.com/public/index.html";

console.log(path.extname(url));
console.log(path.dirname(url));
console.log(path.basename(url));

// __filename || __dirname

console.log(__filename)
console.log(__dirname)
