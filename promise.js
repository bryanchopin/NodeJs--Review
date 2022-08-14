
const promiseFinish = true;

// Promise with resolve and reject
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (promiseFinish) {
            resolve('Promise finished');
        } else {
            reject('Promise failed');
        }
    }, 2000);
});


//promise result just for resolve
// myPromise.then((message) => {
//     console.log(message);
// });

//promise result just for reject
// myPromise.catch((message) => {
//     console.log(message);
// });

const promiseTrue = (value) => {
    console.log(value);
};
const promiseFalse = (value) => {
    console.log(value);
};

//promise result for resole and reject
myPromise.then(promiseTrue, promiseFalse);



//function with  a boolean value
const statusPizza = () => {
    return  Math.random() > 0.8;
};

//new promise from pizza simulator
const pizzaPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(statusPizza()){
            resolve('Pizza is ready');
        }
        else{
            reject('Pizza is not ready');
        }
    } , 2000);
});


const pizzaAlready = (message) => {
    console.log(message);
};
const pizzaNotReady = (message) => {
    console.log(message);
};

//promise result for resolve and reject
pizzaPromise.then(pizzaAlready, pizzaNotReady);

//other way to do the same thing
pizzaPromise
    .then((messageSuccess) => {
        console.log(messageSuccess);
    })
    .then( null,(messageFailed) => {
        console.log(messageFailed);
    });

//other way to do the same thing
pizzaPromise
    .then((messageSuccess) => {
        console.log(messageSuccess);
    })
    .catch((messageFailed) => {
        console.log(messageFailed);
    });