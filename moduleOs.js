const os = require('os');




console.log(os.arch()); //shows the architecture of the system
console.log(os.platform()); //shows the platform of the system
console.log(os.cpus())  //shows the cpu of the system
console.log(os.freemem() + ' Bytes'); //shows the free memory of the system
console.log(os.homedir()); //shows the home directory of the system
console.log(os.hostname()); //shows the hostname of the system
console.log(os.networkInterfaces()); //shows the type of the system
console.log(os.release()); //shows the release of the system
console.log(os.tmpdir()); //shows the temporary directory of the system
console.log(os.totalmem() + ' Bytes'); //shows the total memory of the system
console.log(os.type()); //shows the type of the system
console.log(os.uptime() + ' Seconds'); //shows the uptime of the system
console.log(os.userInfo()); //shows the user info of the system