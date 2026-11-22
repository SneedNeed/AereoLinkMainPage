// ==========================================================
// AereoLink — alternar entre inicio de sesión y registro
// ==========================================================

const loginTab = document.querySelector('.login-tab');
const registerTab = document.querySelector('.register-tab');
const loginForm = document.querySelector('.login-form');
const registerForm = document.querySelector('.register-form');

// Muestra el formulario indicado ('login' o 'register')
// y deja activa la pestaña correspondiente.
function switchAuthForm(target) {
    const showLogin = target === 'login';

    loginTab.classList.toggle('active', showLogin);
    registerTab.classList.toggle('active', !showLogin);

    loginForm.classList.toggle('active', showLogin);
    registerForm.classList.toggle('active', !showLogin);
}

// Pestañas
loginTab.addEventListener('click', () => switchAuthForm('login'));
registerTab.addEventListener('click', () => switchAuthForm('register'));

// Enlaces de abajo de cada formulario ("Regístrate" / "Inicia sesión")
document.querySelector('.to-register-link').addEventListener('click', () => switchAuthForm('register'));
document.querySelector('.to-login-link').addEventListener('click', () => switchAuthForm('login'));
