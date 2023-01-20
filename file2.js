const http = require('http');

const server = http.createServer(function(req, res) {
    res.write('<h1> Hello Node </h1>');
    res.end();
});

server.listen(3000, (err) => {
    if (err) { console.log(err) } else {
        console.log("Le serveur est en cours d'exécution sur le port 3000");
    }
});