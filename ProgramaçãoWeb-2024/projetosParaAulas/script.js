async function consultarRepositorios() {  
    const nomeUsuario = document.getElementById("inputNomeUsuario").value;

    const listaRepositorios = document.getElementById("listaRepositorios");

    listaRepositorios.innerText=' ';

    if(!nomeUsuario){
        alert("Informe o nome do usuário");
        return
    }

    const url = `https://api.github.com/users/${nomeUsuario}/repos`;

    const token = 'meu token';
    try{
        const resposta = await fetch(url,{
            method: "GET",
            headers: {
                Authorization: `token ${token}`
            }
        });
    }

    try {
        const resposta = await fetch(url);
        if(!resposta.ok){
            alert("Erro ao realizar a consutlta")
            return;
        }
        const repositorios = await resposta.json();

        repositorios.forEach(eLement => {
            const itemLista = document.createElement('li');
            itemLista.textContent = eLement.name;
            listaRepositorios.appendChild(itemLista);
        });

        console.log("Antes da promisse");
    } catch (error) {
        
    }
}   