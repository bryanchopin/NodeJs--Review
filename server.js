const http = require("http")


// Create a server
const server = http.createServer((req, res) => {
    const number = () => { return Math.floor(Math.random() * 100) + 1;}
    console.log(req.url); // show the url in the console
    console.log(req.method); // GET, POST, PUT, DELETE
    res.setHeader("content-type", "application/json"); // set the content type to json
    console.log(res.getHeader); // show the content type in the console
    //console.log(req.headers); // show the headers in the console
    console.log(res.statusCode); // show the status code in the console
    res.end("Hello daniel you're " + number()); // send a response to the client
});

const port = process.env.PORT || 3000;


// Start the server
server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});