const data = require('./data.json');

console.log(data);
console.log(data.name);
console.log(data.age);
console.log(data.composer);


let humanData = {
    name: 'fernando',
    age: 20,
    composer: 'bach'
}

let dataJson = JSON.stringify(humanData);
console.log(dataJson);
console.log(typeof dataJson);

let dataParse = JSON.parse(dataJson);
console.log(dataParse);
console.log(typeof dataParse);