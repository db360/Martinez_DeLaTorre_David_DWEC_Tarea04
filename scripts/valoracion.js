
var formulario = document.getElementById("formulario");
let enviado = false;

let resultado = document.getElementById("resultado");


/* Seleccionamos los dos botones por ID, y añadimos un eventListener y creamos una funcion para cada uno */

document.getElementById("enviar").addEventListener('click',enviar,false);

document.getElementById("reset").addEventListener('click',reset,false);

// Agregar las visitas a la página en localStorage

let visitas = localStorage.getItem("visitas_valoración");
if (!visitas) {
    visitas = 0;
}
visitas++;

localStorage.setItem("visitas_valoracion", visitas);


function enviar(e) {
    e.preventDefault();
    enviado = true;



    // Variables con los datos del formulario
    var nombre = formulario.nombre.value;
    var password = formulario.password.value;
    var password2 = formulario.password2.value;

    for (var i = 0; i < formulario.categoria.length; i++){
        if (formulario.categoria[i].checked)
        var categoria = formulario.categoria[i].value;
    }

    const nombrePatron = /^[a-zA-ZñÑ]{10,25}$/;

    if (!nombrePatron.test(nombre)) {
        // alert("El nombre no es válido");
        document.getElementById("errorNombre").innerHTML = "Hay carácteres no permitidos";
        document.getElementById("nombre").style.backgroundColor = "red";
        return;
    }

    if(password != password2) {
        document.getElementById("errorPassword").innerHTML = "Los Passwords deben de coincidir";
        document.getElementById("nombre").style.backgroundColor = "red";
        return
    }
    if (!nombrePatron.test(password)) {
        // alert("El nombre no es válido");
        document.getElementById("errorPassword").innerHTML = "Hay carácteres no permitidos";
        document.getElementById("nombre").style.backgroundColor = "red";
        return;
    }


    console.log(nombre, password, password2)
    console.log(categoria)
}