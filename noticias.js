const http = require('http');

const server =http.createServer(function(req,res){
    
    var categoria = req.url;

    if(categoria=='/tecnologia'){
        res.end("<html><body>Tecnologia</body></html>")
    }else{ 
        res.end("<html><body>Teste</body></html>")
}
   


});

server.listen(3000);

console.log('Hello');