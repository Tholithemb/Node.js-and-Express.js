 const http = require('http');

 // Request http's 

 const server =  http.createServer((req,res) =>{


     if(req.url === '/'){
         // Main apge request url
        res.end('Welcome to our home page')
     }
     if(req.url ==='/about'){
         // When user is navigating to about
        res.end('Here is our short history')
     }
     // Whenever user is navigating to unkown or un-existing page http url
    res.end(
    `<h1> Oops </h1>
    <p> We can't seem to find the page you are looking for </p>
    <a href="/"> Back home </a>
    `)

 })
 server.listen(5000)
