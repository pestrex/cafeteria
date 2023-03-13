
//Declaración de las variables buscandolas por su nombre en el HTML
var formulario = document.getElementById('formulario'),
    nombre = formulario.nombre,
    correo = formulario.correo,
    contraseña = formulario.contraseña,
    genero = formulario.genero,
    terminos = formulario.terminos,
    error = document.getElementById('error');

//Función para validar que se haya introducido algun nombre
function validarName(e) {
    if (nombre.value == '' || nombre.value == null) {
        error.style.display = 'block';
        error.innerHTML += '<li>Ingrese su nombre </li>';
        console.log('Ingrese su nombre');

        e.preventDefault();
    } else {
        error.style.display = 'none';
    }
}

//Función para validar que se haya introducido algun mail
function validarEmail(e) {
    if (correo.value == '' || correo.value == null) {
        error.style.display = 'block';
        error.innerHTML += '<li>Complete Email </li>';
        console.log('Ingrese su correo electrónico');

        e.preventDefault();
    } else {
        error.style.display = 'none';
    }
}

//Función para validar que se haya introducido alguna contraseña
function validarPassword(e) {
    if (contraseña.value == '' || contraseña.value == null) {
        error.style.display = 'block';
        error.innerHTML += '<li>Ingrese sus apeliidos </li>';
        console.log('Ingrese sus apeliidos');

        e.preventDefault();
    } else {
        error.style.display = 'none';
    }
}

//Función para validar que se haya seleccionado algún género
function validarGender(e) {
    if (genero.value == '' || genero.value == null) {
        error.style.display = 'block';
        error.innerHTML += '<li>Seleccione su género </li>';
        console.log('Seleccione su género');

        e.preventDefault();
    } else {
        error.style.display = 'none';
    }
}

//Función para validar que se hayan aceptado los términos y condiciones
function validarTerms(e) {
    if (terminos.checked == false) {
        error.style.display = 'block';
        error.innerHTML += '<li>Acepte los términos y condiciones </li>';
        console.log('Acepte los términos y condiciones');

        e.preventDefault();
    } else {
        error.style.display = 'none';
    }
}

//Función para validar cada uno de los campos con las funciones creadas anteriormente
function validarForm(e) {
    error.innerHTML= '';

    validarName(e);
    validarEmail(e);
    validarPassword(e);
    validarGender(e);
    validarTerms(e);

}

//Función para realizar la comprobación a todo el formulario
formulario.addEventListener('submit',validarForm);