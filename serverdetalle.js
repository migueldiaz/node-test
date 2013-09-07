var http=require('http');

function onRequest(request,response){
	console.log("Request loaded");
	response.writeHead(200,{"content-type": "text/plain"});
	response.write("Hola desde server detalle ");
	response.end();
}

http.createServer(onRequest).listen(8888);
console.log("Servidor arrancado");
