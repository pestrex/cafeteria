
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
        error.innerHTML += '<li>Complete Name </li>';
        console.log('Please add a name');

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
        console.log('Please add a email');

        e.preventDefault();
    } else {
        error.style.display = 'none';
    }
}

//Función para validar que se haya introducido alguna contraseña
function validarPassword(e) {
    if (contraseña.value == '' || contraseña.value == null) {
        error.style.display = 'block';
        error.innerHTML += '<li>Complete Password </li>';
        console.log('Please add a password');

        e.preventDefault();
    } else {
        error.style.display = 'none';
    }
}

//Función para validar que se haya seleccionado algún género
function validarGender(e) {
    if (genero.value == '' || genero.value == null) {
        error.style.display = 'block';
        error.innerHTML += '<li>Select a gender </li>';
        console.log('Please select a gender');

        e.preventDefault();
    } else {
        error.style.display = 'none';
    }
}

//Función para validar que se hayan aceptado los términos y condiciones
function validarTerms(e) {
    if (terminos.checked == false) {
        error.style.display = 'block';
        error.innerHTML += '<li>Agree terms & conditions </li>';
        console.log('Please agree terms & conditions');

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