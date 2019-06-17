const fs  = require("fs");

// async
fs.readFile("readable.txt","utf-8", ( error, data ) => {
    if( error ) {
        console.log("error = ", error );
    } else {
        console.log("data = ", data );
    }
});

console.log("File read");


//sync
let content;
try {
    content =  fs.readFileSync("readable.txt", "utf-8");
} catch( error ) {
    console.log("error = ", error );
} finally {
    console.log("in finally");
}

//utf-8 is used to get the actual data as by default node returns raw data
console.log("File read", content);
