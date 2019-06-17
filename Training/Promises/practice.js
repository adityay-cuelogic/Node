

const fetch = require("node-fetch");
let count = 1;
function addCount() {
    return new Promise( (resolve,reject) => {
        setTimeout(()=> {
            let error = false;
            count++;
            if( !error ) {
                console.log("in if");
                resolve();
            } else {
                reject();
            }
        },2000);
    } )
    
}

function fetchCount() {
    // await addCount();
    // console.log("count =", count);
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
        let b = new Promise();
        b.then(response => {
            
        })
        return res.json();
    })
    .then((res) => {
        console.log(res);
    })
    .catch((error) => {
        console.log(error);
    })
    // console.log(await res.json());
    console.log("in herer");


}