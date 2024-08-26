function buscarCommits(repositorio, dataInicial, dataFinal) {
    const url = `https://api.github.com/repos/${repositorio}/commits?since=${dataInicial}&until=${dataFinal}&per_page=100`;

    fetch(url).then(response => response.json()).then(commits => {
        console.log(commits);

        verificarMensagensCommits(commits);
    })

}

function PageRefresh() {
    const formPesquisa = document.getElementById("form_pesquisa");

    formPesquisa.addEventListener("form_pesquisa", () => {
        window.location.reload();


    });
}
function verificarMensagensCommits(commits) {
    const messageCommitDescritas = [];

    commits.forEach(element => {
        const commitsMessage = element.commit.message;

        messageCommitDescritas.push(commitsMessage);
    });

    console.log(messageCommitDescritas);

    mostrarTela(messageCommitDescritas);
}
function verificarDatas() {
    const dataInicialInput = document.getElementById('dataInicial');
    const dataFinalInput = document.getElementById('dataFinal');


    const currentDate = new Date().toISOString().split('T')[0];

    dataInicialInput.max = currentDate;
    dataFinalInput.max = currentDate;

    const dataInicial = startDateInput.value;
    const dataFinal = endDateInput.value;

    if (dataInicial > currentDate || dataFinal > currentDate) {

        dataInicialInput.value = '';
        dataFinalInput.value = '';
        dataInicialInput.max = currentDate;
        dataFinalInput.max = currentDate;
    }
}

const campoBloqueado = document.getElementById("dataFinal");
const dataInicialInput = document.getElementById("dataInicial");
campoBloqueado.setAttribute("disabled", true);
dataInicialInput.addEventListener("input", () => {
    campoBloqueado.removeAttribute("disabled");
});

function mostrarTela(messageCommit) {
    const dados = document.querySelector("#dados");

    const uniqueMessages = new Set();

    messageCommit.forEach(element => {

        if (element.includes("Ignore-revision") || element.includes("Merge branch")) {
            return;
        }

        uniqueMessages.add(element);
    });

    uniqueMessages.forEach(message => { // percorre o conjunto para criar os elementos na tela
        const h3 = document.createElement("h3");
        h3.innerHTML = message;
        dados.appendChild(h3);
    });

    //return dados.innerHTML;
}


