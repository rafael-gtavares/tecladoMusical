function tocaSom(idElementoAudio) {
    const elemento = document.querySelector(idElementoAudio);
    if (elemento && elemento.localName === 'audio') {
        elemento.play()
    }
    else {
        console.log('Elemento não encontrado ou seletor inválido')
    }
};

const listaDeTeclas = document.querySelectorAll('.tecla');
const tamLista = listaDeTeclas.length

for (let c = 0; c < tamLista; c++) {
    const tecla = listaDeTeclas[c];
    const classeTecla = tecla.classList[1];

    const idAudio = `#som_${classeTecla}`;

    tecla.onclick = function() {
        tocaSom(idAudio);
    };

    tecla.onkeydown = function(evento) {
        if (evento.code == 'NumpadEnter' || evento.code == 'Space' || evento.code == 'Enter'){
            tecla.classList.add('ativa');
        };
    };

    tecla.onkeyup = function(evento) {
        if (evento.code == 'NumpadEnter' || evento.code == 'Space' || evento.code == 'Enter'){
            tecla.classList.remove('ativa');
        };
    };
};
