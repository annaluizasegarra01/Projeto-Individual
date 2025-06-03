// Sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var senha = sessionStorage.SENHA_USUARIO;
    var idUsuario = sessionStorage.ID_USUARIO;

    if (!(email && senha && idUsuario)) {
        
        window.location.href = "login.html";
    }
}
