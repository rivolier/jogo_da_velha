window.onload = function () {
    document.getElementById("tabuleiro").style.visibility = "hidden";
};

var jogadorX = "X";
var jogadorO = "O";
var jogadorVez;

function iniciar() {
    jogo = new Array(9);
    jogadorVez = jogadorX;
    setDivMsg();
    document.getElementById("tabuleiro").style.visibility = "visible";
}

function reset() {
    window.location.reload();
}

function setDivMsg() {
    document.getElementById("msg").innerHTML = "Jogador da vez:  " + jogadorVez;
}

/*Verifica se o tabuleiro está completamente preenchido, se estiver, significa que ninguém venceu a rodada*/
function tabuleiroCheio() {
    var preenchidos = 0;
    for (var i = 0; i <= 9; i++) {
        if (jogo[i] != undefined)
            preenchidos++;
    }
    if (preenchidos == 9) {
        alert("Empate!");
        reset();
    }
}

function mesmaLinha() {
    for (var i = 0; i < 7; i += 3) {
        if (jogo[i] == "X" && jogo[i + 1] == "X" && jogo[i + 2] == "X") {
            alert(jogadorX + " venceu!");
            reset();
        }
        if (jogo[i] == "O" && jogo[i + 1] == "O" && jogo[i + 2] == "O") {
            alert(jogadorO + " venceu!");
            reset();
        }
    }
}

function mesmaColuna() {
    for (var i = 0; i < 3; i++) {
        if (jogo[i] == "X" && jogo[i + 3] == "X" && jogo[i + 6] == "X") {
            alert(jogadorX + " venceu!");
            reset();
        }
        if (jogo[i] == "O" && jogo[i + 3] == "O" && jogo[i + 6] == "O") {
            alert(jogadorO + " venceu!");
            reset();
        }
    }

}

function mesmaDiagonal() {
    if ((jogo[0] == "X" && jogo[4] == "X" && jogo[8] == "X") ||
        (jogo[2] == "X" && jogo[4] == "X" && jogo[6] == "X")) {
        alert(jogadorX + " venceu!");
        reset();
    } else if ((jogo[0] == "O" && jogo[4] == "O" && jogo[8] == "O") ||
        (jogo[2] == "O" && jogo[4] == "O" && jogo[6] == "O")) {
        alert(jogadorO + " venceu!");
        reset();
    }
}

function escolheuCelula(posicao, cel) {
    if (jogo[posicao] == undefined) {
        cel.innerHTML = jogadorVez;
        jogo[posicao] = jogadorVez;
        (jogadorVez == "X") ? jogadorVez = jogadorO: jogadorVez = jogadorX;
        setDivMsg();
    } else alert("Jogue em outra casa!");
    tabuleiroCheio();
    mesmaColuna();
    mesmaLinha();
    mesmaDiagonal();
}