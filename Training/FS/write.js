const fs  = require("fs");
// The below functions will overwrite the current text 
// async 
fs.writeFile("readable.txt","test", ( error ) => {
    if( error ) {
        console.log("error = ", error );
    } 
});
console.log("File write");


//sync => use writeFileSync


// The below functions will append the current text 

// async 
fs.appendFile("readable.txt","test", ( error ) => {
    if( error ) {
        console.log("error = ", error );
    } 
});
console.log("File write");