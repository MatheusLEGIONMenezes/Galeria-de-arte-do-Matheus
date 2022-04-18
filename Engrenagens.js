function exibeAlert() {
    var nomeDigitado = document.getElementById("nome").value;

    alert("Seu nome é: " + nomeDigitado);
}

function exibeAlerta() {
    var notaDigitada = document.getElementById("nota").value;

    if (notaDigitada < 0) {
        alert("Você não sabe ler não? Digite uma nota valida aí!");
        return;
    }
    if (notaDigitada > 10) {
        alert("Você não sabe ler não? Digite uma nota valida aí!");
    } else {
        alert("Sua nota é: " + notaDigitada);
    }

}