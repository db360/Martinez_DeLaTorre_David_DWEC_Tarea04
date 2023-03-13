/* Asignamos los dos botones a dos variables */

var btnEmpleo = document.getElementById("empleo");
var btnValoracion = document.getElementById("valoracion");

/* Creamos un event listener del click y realizamos el redireccionamiento a cada una de las páginas */

btnEmpleo.addEventListener("click", () => {
  window.location.href = "/empleo.html";
});
btnValoracion.addEventListener("click", () => {
  window.location.href = "/val.html" ;
});
