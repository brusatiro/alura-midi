function tocaSom(seletorAudio) {
    document.querySelector(seletorAudio).play();

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        console.log("Elemento não encontrado ou seletor inválido")
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla'); 

// ------------------------ utilizando while ------------------------

/* let contador = 0;

while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
 
    tecla.onclick = function() {
      tocaSom(idAudio);
     } 

     contador = contador + 1;
} */

// ------------------------ utilizando for ------------------------

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    
    tecla.onclick = function() {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {
        if (evento.code === "Enter" || evento.code === "Space") {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa')
    }
}
