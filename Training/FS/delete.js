const fs = require("fs");
//2 ways to delete files
// Sync
try {
    fs.unlinkSync("test.js");
} catch( error ) {
    console.log("error = ", error );
} finally {
    console.log("in finally");
}

// console.log("File is delted");
//Async
fs.unlink("test.js", ( error ) => {
    if( error ) {
        console.log("error = ", error );
    }
})

console.log("File is delted");