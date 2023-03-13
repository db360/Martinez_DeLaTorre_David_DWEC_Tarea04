var formulario = document.getElementById("formulario");
let enviado = false;
let error = false;

let resultado = document.getElementById("resultado");


/* Seleccionamos los dos botones por ID, y añadimos un eventListener y creamos una funcion para cada uno */

document.getElementById("enviar").addEventListener('click',enviar,false);

document.getElementById("reset").addEventListener('click',reset,false);

// Agregar las visitas a la página en localStorage

let visitas = localStorage.getItem("visitas_empleo");
if (!visitas) {
    visitas = 0;
}
visitas++;

localStorage.setItem("visitas_empleo", visitas);


// Manejar el envío del formulario

function enviar(e) {

    e.preventDefault();


    // Variables con los datos del formulario
    var nombre = formulario.nombre.value;
    var telefono = formulario.telefono.value;
    var formacion = formulario.formacion.value;


    // Verificar si el nombre cumple con el patrón

    const nombrePatron = /^[a-zA-ZçñÑáéíóúÁÉÍÓÚ\s]+$/;
    if (!nombrePatron.test(nombre)) {
        // alert("El nombre no es válido");
        document.getElementById("errorNombre").innerHTML = "Hay carácteres no permitidos";
        document.getElementById("nombre").style.backgroundColor = "red";
        error = true;
    }

    // Verificar si el teléfono cumple con el patrón
    const telefonoPatron = /^[6|7|8|9]\d{8}$/;

    if (!telefonoPatron.test(telefono)) {
        document.getElementById("errorTelefono").innerHTML = "El teléfono debe contener 8 cifras y empezar por 6,7,8 ó 9";
        document.getElementById("telefono").style.backgroundColor = "red";
        error = true;
    }


    // Mostrar los resultados

    if(!error) {
        enviado = true;

        document.getElementById("resTitle").innerHTML = "Formulario Enviado!";

        document.getElementById("resSubtitle").innerHTML = "Nos pondremos en contacto con usted lo más rápido posible.";

        document.getElementById("resNombre").innerHTML = "Nombre: " + nombre;

        document.getElementById("resTel").innerHTML = "Teléfono: " + telefono;

        document.getElementById("resForm").innerHTML = formacion;

        /* Estilos que se aplican en el div con class "resultado" para que no interfiera en el diseño cuando no se muestra el resultado. */

        resultado.style.visibility = 'visible';
        resultado.style.border = '#03e9f4 1px solid';
        resultado.style.backgroundColor = '#141e30';

        // Ocultamos el boton submit cuando se envia
        document.getElementById("enviar").style.display = "none";
    }

};


function reset()
{

    resultado.style.visibility = 'hidden';
    document.getElementById("nombre").style.backgroundColor = "transparent";
    document.getElementById("telefono").style.backgroundColor = "transparent";

    document.getElementById("errorNombre").innerHTML = "";
    document.getElementById("errorTelefono").innerHTML = "";
    formulario.nombre.value = "";
    formulario.telefono.value = null;
    formulario.formacion.value = null;

    document.getElementById("enviar").style.display = "inline-block";



}