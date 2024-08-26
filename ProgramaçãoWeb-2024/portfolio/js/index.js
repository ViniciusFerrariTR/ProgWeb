carregarMiniatura();


function carregarMiniatura() {

    const miniaturas = document.querySelectorAll('.miniaturas img');

    miniaturas.forEach(function (miniatura) {
        miniatura.addEventListener('click', function () {
            const imgGrande = document.getElementById('imagemGrande');
            const descricaoProjeto = document.getElementById('descricaoProjeto');

            imgGrande.src = this.getAttribute('data-img');
            descricaoProjeto.textContent = this.getAttribute('data-descricao');
        });
    });
}

const imgGrande = document.getElementById('imagemGrande');
const descricaoProjeto = document.getElementById('descricaoProjeto');
imgGrande.src = "/img/ICONE-SEM-FUNDO-BRANCO.png";
descricaoProjeto.textContent = "Projeto feito em sala de aula   ";