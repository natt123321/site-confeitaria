// Declaração de variáveis

let indice = 0 // ela vai controlar o índice da lista

let imagens = [
    "IMG/bolo1.jpg",
    "IMG/bolo2.jpg",
    "IMG/bolo3.jpg",
    "IMG/bolo4.jpg",
    "IMG/bolo5.jpg"
]

// Função para trocar a imagem

function trocar() {
    let img = document.getElementById("img")
    img.src = imagens[indice]
}

// Lógica para trocar de imagem

setInterval(function() {

    trocar()

    indice++

    if (indice >= imagens.length) {
        indice = 0
    }

}, 5000) // 5000 milissegundos = 5 segundos