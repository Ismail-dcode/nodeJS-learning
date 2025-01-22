const fs = require("fs")
const os = require('os')

console.log(os.cpus().length);


console.log("1");


 fs.readFile("contact.txt", "utf-8" , (err , result) =>{
    console.log(result);
    

});




fs.writeFileSync("./text.txt","hey Buddy" )

fs.writeFile("./text.txt","hey d", (err)=>{})

    const result = fs.readFileSync('./contact.txt', "utf-8")

  console.log(result);
  
fs.readFile('./contact.txt', "utf-8",(err , result) => {
    if(err){
        console.log("error", err);
        
    }else{
        console.log(result);
        
    }
})
fs.unlinkSync( "./copy1")

fs.appendFileSync("./text.txt", `${Date.now()} hey Jarvis\n`);


fs.copyFileSync("./text.txt", "./copy1")
 console.log( fs.statSync("./text.txt").isFile());

 fs.mkdirSync("my-docf/a/b", {recursive:true})

