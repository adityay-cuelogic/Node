const fs  =  require("fs");
const path =  require("path");

function crawl(directory) {
    console.log("directory = ",directory )
    let files = fs.readdirSync(directory);
    for (let index = 0; index < files.length; index++) {
        let next = path.join(directory,files[index]);
        if( fs.lstatSync(next).isDirectory() ) {
            crawl(next);
        } else {
            console.log(next);
        }
        
    }
}

crawl(__dirname)
