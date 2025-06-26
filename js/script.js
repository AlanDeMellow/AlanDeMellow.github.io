function alternarTema() {
    document.body.classList.toggle('light-mode');
}

function acessibilidade() {
    const body = document.body;
    const style = window.getComputedStyle(body);
    const atual = parseFloat(style.fontSize);

    if (atual < 24) {
        body.style.fontSize = (atual + 2) + 'px';
    }
}

function diminuirFonte() {
    const body = document.body;
    const style = window.getComputedStyle(body);
    const atual = parseFloat(style.fontSize);

    if (atual > 12) { // define um limite mínimo
        body.style.fontSize = (atual - 2) + 'px';
    }
}
