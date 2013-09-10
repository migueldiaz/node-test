var http=require('http');
var url= require("url");

function start(route,handle){
function onRequest(request,response){
	//console.log("Request loaded");
  
    var pathname= url.parse(request.url).pathname;
    console.log("ServerStart.onRquest: Request for "+pathname+" received"); 

    route(pathname,handle,response);

	response.writeHead(200,{"content-type": "text/plain"});
	response.write("Hola desde server ");
	response.end();
  }
  http.createServer(onRequest).listen(8888);
  console.log("Servidor arrancado, puerto 8888");
}
exports.start = start;