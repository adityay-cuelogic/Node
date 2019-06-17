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
        },1000);
    } )
    
}

async function fetchCount() {
    await addCount();
    console.log("count =", count);


}

fetchCount();

// addCount()
// .then( fetchCount )
// .catch(error => {
//     console.log("error = ", error );
// });

// async await




//Promise.all
// const promise1 = Promise.resolve('Hello World');
// const promise2 = new Promise( (resolve, reject) => {
//     setTimeout( () => {
//         resolve("Last Promise");
//     }, 1000 )
// } );
// const promise3 = new Promise( (resolve, reject) => {
//     setTimeout( () => {
//         resolve("Second Last Promise");
//     }, 1000 )
// } );

//This will get resolve when the promise( which has the highest resolving time ) gets resolved
// Promise.all([promise1,promise3, promise2])
// .then(values => console.log("values = ", values))
// .catch(error => console.log("error = ", error));