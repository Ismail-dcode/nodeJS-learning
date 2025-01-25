const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req , res) =>{
    if(req.url === "/favicon.ico") return res.end
    const log = `${Date.now()}: ${req.url} New Req Recived \n`

    const myUrl = url.parse(req.url , true);
    console.log(myUrl);
    
   fs.appendFile("Pure.txt", log ,(err , data) => {

    
    switch(myUrl.pathname){
        case '/':
            res.end("Hello welcome to the home page");
            break
            
        case '/about':
            const username = myUrl.query.myname
            res.end("My name is ismail");
            break
            default :
            res.end("404 not Found");
    }


   })
    
})

myServer.listen(8000 ,() => console.log("Server Strated") )