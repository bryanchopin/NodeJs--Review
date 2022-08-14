const fs = require('fs');


// read file and return content
fs.readFile('./Fs/index.html', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

//rename file
fs.rename('./Fs/index.html', './Fs/main.html', (err) => {
    if (err) throw err;
    console.log('renamed');
});

//append content to file
fs.appendFile('./Fs/main.html', '<h1>Hello World</h1>', (err) => {
    if (err) throw err;
    console.log('appended');
});

//replace content in file
fs.writeFile('./Fs/main.html', '<h1>Hello World</h1>', (err) => {
    if (err) throw err;
    console.log('replaced');
});


//delete file
fs.unlink('./Fs/danger.html', (err) => {
    if (err) throw err;
    console.log('deleted');
});