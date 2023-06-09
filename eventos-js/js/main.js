function mensagemBotao() {
    document.getElementById("mensagem1").innerHTML = "Você clicou no botão"; 
}

function mensagemParagrafo() {
    document.getElementById("mensagem1").innerHTML = "Você clicou no parágrafo"; 
}

function cute() {
    document.getElementById("mensagem2").innerHTML = "&#x1F648";
    document.getElementById("cute").innerHTML = "cute";
}

function achou() {
    document.getElementById("mensagem2").innerHTML = "&#x1F649;";
    document.getElementById("cute").innerHTML = "achou";
}

function carregou() {
    document.getElementById("mensagem3").innerHTML = "Página carregada";
}

function mudou() {
    var x = document.getElementById("mySelect").value;
    document.getElementById("carro").innerHTML = "Você selecionou: " + x;
}