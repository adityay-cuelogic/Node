const fs  = require("fs");

let bufferStream = fs.createReadStream("readable.txt");
let writeStream = fs.createWriteStream("copy.txt");
// bufferStream.on("data", (response) => {
//     console.log("new data");
//     writeStream.write(response)
// });
console.log("here");

bufferStream.pipe(writeStream);
console.log("File got stream");