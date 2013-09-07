function say(word){
	console.log(word);
}
function execute(functionAsParameter, value){
	functionAsParameter(value);
}
execute(say,"Hola");