function start(response){
	console.log("Request handler START called");
	var body= 
	'<html>'+
	'<head>'+
	'<meta http-equiv="Content-type" content="text/html";>'+
	'<charset=UTF-8 />'+
	'</head>'+
	'<form action="/upload" method="post">'+
	'<textarea name="text" rows="20" cols="60"></textarea>'+
	'<input type="submit" value="Enviar texto">'+
	'</form>'+
	'</body>'+
	'</html>';
	response.writeHead(200,{"content-type": "text/html"});
	
	response.write(body);
	response.end();
}
function upload(response){
	console.log("Request handler UPLOAD called");
	response.write("Hola upload");
	response.end();
}
exports.start = start;
exports.upload = upload;