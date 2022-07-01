const http = require('http'); 

http.createServer(function(request,response){ 
   
    const jsonData = {name : "Shailesh" , age : 24 }
    response.write("<h1> Hello I am HTML Tag</h1>")
   //
    response.write(JSON.stringify(jsonData));
    response.end();
})
.listen(3000); 

