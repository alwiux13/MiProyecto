function cambiaColor(){
	var elem = document.getElementById('quienesSomos');
	elem.className += " verde";

}
function revierteColor(){
	var elem = document.getElementById('quienesSomos');
	elem.className = "quienesSomos";
}
function muestraTexto(){
	var elem = document.getElementById('quienesSomosTexto');
	elem.className = "muestra";

	var elem2 = document.getElementById('masTexto');
	elem2.innerHTML = "<img src='img/logo.png' >";

}