const greeting = (name) =>{
    return console.log('hello friends ' + name);
}

const age = (age) =>{
    return console.log('you are ' + age + ' years old');
}

const pyramid = (height) =>{
    let pyramid = '';
    for(let i = 0; i < height; i++){
        for(let j = 0; j < i; j++){
            pyramid += '#';
        }
        pyramid += '\n';
    }
    return console.log(pyramid);
}
setTimeout(greeting,5000, 'fernando' )   // this will execute after 5 second

setImmediate(age,20) // this will execute immediately after all synchronous code is finished

setInterval(pyramid,1000,10) // this will execute every 1 second