// sessão
function validarSessao() {
var email = sessionStorage.EMAIL_USUARIO;
var senha = sessionStorage.SENHA_USUARIO;

var b_usuario = document.getElementById("b_usuario");

if (email != null && senha != null) {
b_usuario.innerHTML = email;
} else {
window.location = "../login.html";
}
}
