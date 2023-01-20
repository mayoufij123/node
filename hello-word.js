//console.log('HELLO WORLD');

//function Sum(a,b){
//return a+b
//}
//let inpuot= Number(process.argv[2]);
//let input= Number(process.argv[3])
//console.log(Sum(inpuot,input))
//module.exports= {Sum}
// 2- Creating Server
//const http = require('http');

//const server = http.createServer(function(req, res) {
//res.write('<h1><Hello Node!!!!/h1>');
//res.end();
//});

//server.listen(3000, (err) => {
// err ? console.log(err) : console.log('The Server is Running on port 3000');
//});
//create a file

const fs = require("fs")
    //fs.writeFile('welcome.txt', "Hello Node", err => {
    // if (err) { console.log(err) } else {
    //  console.log("created with success")
    //}

//})
fs.readFile("welcome.txt", (err, file) => {
    if (err) {
        console.log(err)
    } else { file }
})