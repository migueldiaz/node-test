function route(pathname,handle){
 console.log("A punto de enrutar una peticion para "+pathname);

 if (typeof handle[pathname]==='function') {
 	handle[pathname]();
 } else{
 	console.log("No request handler found for "+pathname);
 };
}
exports.route=route;