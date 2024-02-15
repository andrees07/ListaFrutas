var temaActual = 1;

function alternarTema() {
    
    var listaFrutas = document.getElementById("lista-frutas").getElementsByTagName("li");
    
    for (var i = 0; i < listaFrutas.length; i++) {
        listaFrutas[i].classList.remove("tema-par", "tema-impar");
    }
   
    if (temaActual === 1) {
        temaActual = 2;
    } else {
        temaActual = 1;
    }
    
    for (var i = 0; i < listaFrutas.length; i++) {
        if (temaActual === 1 && i % 2 === 0) {
            listaFrutas[i].classList.add("tema-par");
        } else if (temaActual === 2 && i % 2 !== 0) {
            listaFrutas[i].classList.add("tema-impar");
        }
    }
}
