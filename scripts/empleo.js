var formulario = document.getElementById("formulario");
let enviado = false;
let error = false;

let resultado = document.getElementById("resultado");


/* Seleccionamos los dos botones por ID, y añadimos un eventListener y creamos una funcion para cada uno */

document.getElementById("enviar").addEventListener('click',enviar);

document.getElementById("reset").addEventListener('click',reset);


/* Selección de los inputs para cambiar el color de fondo a amarillo cuando se hace focus,
he usado blur, por que si no, el color amarillo se queda en el background, aunque se haya
perdido el focus en él */

document.getElementById("nombre").addEventListener("focus", (event) => {
    event.target.style.background = "rgba(222, 219, 19, 0.34)";
});
document.getElementById("nombre").addEventListener("blur", (event) => {
    event.target.style.background = "";
});

document.getElementById("telefono").addEventListener("focus", (event) => {
    event.target.style.background = "rgba(222, 219, 19, 0.34)";
});
document.getElementById("telefono").addEventListener("blur", (event) => {
    event.target.style.background = "";
});


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

    // Variables con los datos del formulario / validaciones
    var nombre = formulario.nombre.value;
    if(nombre === "") {
        error = true;
        document.getElementById("errorNombre").innerHTML = "El campo nombre no debe estar vacío";
        document.getElementById("nombre").style.backgroundColor = "red";

    }

    var telefono = formulario.telefono.value;
    if(telefono === "") {
        error = true;
        document.getElementById("errorTelefono").innerHTML = "El campo teléfono no debe estar vacío";
        document.getElementById("telefono").style.backgroundColor = "red";

    }

    var formacion = formulario.formacion.value;

    error = false;

    // Verificar si el nombre cumple con el patrón
    if(!error) {
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
    }

    // Mostrar los resultados si no hay error

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

/* funcion reset */
function reset()
{
    formulario.reset();

    // ocultamos el div de resultado para que no interfiera
    resultado.style.visibility = 'hidden';
    // hacemos reset a los colores de los inputs
    document.getElementById("nombre").style.backgroundColor = "transparent";
    document.getElementById("telefono").style.backgroundColor = "transparent";

    // volvemos a iniciar en blanco los campos de los errores
    document.getElementById("errorNombre").innerHTML = "";
    document.getElementById("errorTelefono").innerHTML = "";

    // iniciamos todos los campos del formulario
    formulario.nombre.value = "";
    formulario.telefono.value = null;
    formulario.formacion.value = null;

    // Volvemos a mostrar el boton enviar, por si estaba oculto debido al envio
    document.getElementById("enviar").style.display = "inline-block";



}