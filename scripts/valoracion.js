
var formulario = document.getElementById("formulario");
let enviado = false;

let resultado = document.getElementById("resultado");

let errorNombre = false;
let errorPassword = false;

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

document.getElementById("password").addEventListener("focus", (event) => {
    event.target.style.background = "rgba(222, 219, 19, 0.34)";
});
document.getElementById("password").addEventListener("blur", (event) => {
    event.target.style.background = "";
});

document.getElementById("password2").addEventListener("focus", (event) => {
    event.target.style.background = "rgba(222, 219, 19, 0.34)";
});
document.getElementById("password2").addEventListener("blur", (event) => {
    event.target.style.background = "";
});

// Agregar las visitas a la página en localStorage

let visitas = localStorage.getItem("visitas_valoración");
if (!visitas) {
    visitas = 0;
}
visitas++;

localStorage.setItem("visitas_valoracion", visitas);


function enviar(e) {
    e.preventDefault();

    // Variables con los datos del formulario
    var nombre = formulario.nombre.value;
    var password = formulario.password.value;
    var password2 = formulario.password2.value;

    /* iteramos con un for sobre el campo de categoria, ya que hay que comprobar cuál de ellos se encuenta seleccionado */
    for (var i = 0; i < formulario.categoria.length; i++){
        if (formulario.categoria[i].checked)
        var categoria = formulario.categoria[i].value;
    }

    /* Creamos las dos constantes con los patrones para el nombre y el password */
    const nombrePatron = /^[a-zA-ZçñÑáéíóúÁÉÍÓÚ\s]{10,25}$/;
    const passwordPatron = /^[.,](?=[^0-9]*[Ññ][^0-9]*$)(?!.*delete).{6,12}$/;

    /* Comprobamos con test si el nombre cumple con las condiciones de la sentencia regex, si no lo hace, Añadiremos el color rojo al input y el mensaje de error, si lo cumple, el fondo del imput será verde y no habrá mensaje de error */
    if (!nombrePatron.test(nombre)) {
        // alert("El nombre no es válido");
        document.getElementById("errorNombre").innerHTML = "Carácteres no permitidos - Longitud 10-25 Carácteres";
        document.getElementById("nombre").style.backgroundColor = "red";
        errorNombre = true;
    } else {
        errorNombre = false;
        document.getElementById("errorNombre").innerHTML = "";
        document.getElementById("nombre").style.backgroundColor = "green";

    }

    /* He añadido una validación para que hay que comprobar la contraseña al crearla, si no coinciden, tendremos un error */
    if(password != password2) {
        document.getElementById("errorPassword").innerHTML = "Los Passwords deben de coincidir";
        document.getElementById("password").style.backgroundColor = "red";
        errorPassword = true;
    }

    /* comprobamos ahora al igual que el campo nombre, el password para que coincida con la expresión regex, si no coincide, mostramos el error y el color, si coincide, el color verde y ningún error */
    if (!passwordPatron.test(password)) {
        // alert("El nombre no es válido");
        document.getElementById("errorPassword").innerHTML = "Hay carácteres no permitidos";
        document.getElementById("password").style.backgroundColor = "red";
        errorPassword = true;
    } else {
        errorPassword = false;
        document.getElementById("errorPassword").innerHTML = "";
        document.getElementById("password").style.backgroundColor = "green";
        document.getElementById("password2").style.backgroundColor = "green";
    }


    /* Si no hay errores, mostraremos los resultados en un div, en mi caso, no se, por temas de diseño, lo he dejado en el centro, con un poco de transparencia para que se pueda apreciar el color verde de los campos introducidos correctamente */

    if(!errorNombre && !errorPassword) {
        enviado = true;
        document.getElementById("resTitle").innerHTML = "Formulario Enviado!";

        document.getElementById("resSubtitle").innerHTML = "Nos pondremos en contacto con usted lo más rápido posible.";

        document.getElementById("resNombre").innerHTML = "Nombre: " + nombre;


        document.getElementById("resCategoria").innerHTML = "Categoría: " + categoria;

        /* Estilos que se aplican en el div con class "resultado" para que no interfiera en el diseño cuando no se muestra el resultado. */

        resultado.style.visibility = 'visible';
        resultado.style.border = '#03e9f4 1px solid';
        resultado.style.backgroundColor = '#141e30';

        // Ocultamos el boton submit cuando se envia, quedando solo el reset.
        document.getElementById("enviar").style.display = "none";

    }
}

/* Creamos la funcion reset para borrar los campos, y tambien los errores y los colores de error en el formulario. */
function reset()
{

    let nombre = document.getElementById("nombre");
    let password = document.getElementById("password");
    let password2 = document.getElementById("password2");

    document.getElementById("enviar").style.display = "inline-block";

    resultado.style.visibility = 'hidden';
    nombre.style.backgroundColor = "transparent";
    password.style.backgroundColor = "transparent";
    password2.style.backgroundColor = "transparent";

    nombre.innerHTML = "";
    password.value = "";
    password2.value = "";


    document.getElementById("errorNombre").innerHTML = "";
    document.getElementById("errorPassword").innerHTML = "";
    document.getElementById("errorPassword").innerHTML = "";

    formulario.nombre.value = "";
    formulario.password.value = null;
    formulario.password2.value = null;

    document.getElementById("enviar").style.display = "inline-block";

}