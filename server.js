var http=require('http');

http.createServer(function(request,response){
	response.writeHead(200,{"content-type": "text/plain"});
	response.write("Hola desde mi server ");
	response.end();
}).listen(8888);
