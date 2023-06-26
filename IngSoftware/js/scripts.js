/* FORMULARIO - REGISTRO */

const form = document.getElementById('form');
const usuario = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	const usuarioValue = usuario.value;
	const emailValue = email.value;
	const passwordValue = password.value;
	const password2Value = password2.value;
	
	var bandera = false;

	if(usuarioValue === '') {
		setErrorFor(usuario, '⚠ Debe ingresar un usuario');
	} else if (!isUser(usuarioValue)) {
        setErrorFor(usuario, "⚠ El usuario debe contener letras, numeros y/o guiones - _");
    } else {
		setSuccessFor(usuario);
	}
	
	if(emailValue === '') {
		setErrorFor(email, '⚠ Debe ingresar un correo');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, '⚠ Ingrese un correo valido');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, '⚠ Ingrese una contraseña');
	} else if (!ispassword(passwordValue)) {
        setErrorFor(password, '⚠ La contraseña debe tener de 4 a 12 digitos')
    }
    else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, '⚠ Ingrese una contraseña');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, '⚠ Las contraseñas no coinciden');
	} else{
		setSuccessFor(password2);
	} 
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-controle error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-controle success';
}

function isUser(usuario){
    return /^[a-zA-Z0-9\_\-]{4,16}$/.test(usuario);
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
function ispassword(password) {
    return /^.{4,12}$/.test(password);
}