const user="dudu7@sep.com.br";
const pass="duDu7";

function carregando() {
    document.getElementById("erroLogin").style.display = "none";
}

function login() {
    emailDigitado = document.getElementById("email").value;
    senhaDigitada = document.getElementById("password").value;

    if(emailDigitado == user && senhaDigitada == pass) {
        console.log("Usuário e senha corretos");
        window.location.replace("welcome.html");
    } else {
        console.log("Usuário e/ou senha incorretos");
        document.getElementById("erroLogin").innerHTML = "Usuário e/ou senha incorretos";
        document.getElementById("erroLogin").style.display = "block";
    }
}

function sair() {
    window.location.replace("index.html");
    console.log("clicou");
}