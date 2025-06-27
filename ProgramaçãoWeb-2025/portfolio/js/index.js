// JavaScript para funcionalidades do portfólio
document.addEventListener("DOMContentLoaded", function () {
    // Menu mobile
    const menuBtn = document.querySelector(".menu-mobile-btn");
    const menu = document.querySelector(".menu");

    menuBtn.addEventListener("click", function () {
        menu.classList.toggle("active");
    });

    // Fechar menu ao clicar em um link
    const menuLinks = document.querySelectorAll(".menu-link");
    menuLinks.forEach((link) => {
        link.addEventListener("click", function () {
            menu.classList.remove("active");
        });
    });

    // Navegação suave
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: "smooth",
                });
            }
        });
    });

    // Interatividade do portfólio
    const projetoCards = document.querySelectorAll(".projeto-card");
    const projetoImagemGrande = document.getElementById("projeto-imagem-grande");
    const projetoTituloDetalhe = document.getElementById(
        "projeto-titulo-detalhe"
    );
    const projetoDescricao = document.getElementById("projeto-descricao");
    const projetoLink = document.getElementById("projeto-link");

    // Dados dos projetos (poderia ser buscado de uma API no futuro)
    const projetosData = {
        1: {
            imagem: "img/ICONE-SEM-FUNDO-BRANCO.png",
            titulo: "Projeto Inspiração",
            descricao:
                '"Na farmácia também devia ter música, chocolate, cerveja e bons amigos, esses sim curam muitas coisas."',
            link: "#",
        },
        2: {
            imagem: "img/ICONE-SEM-FUNDO-MARRON.png",
            titulo: "Nota Musical",
            descricao:
                "\"O amor é 'aquela nota musical', capaz de preencher a pausa na vida melódica de uma outra pessoa.\" (Paulo Cesar Paschoalini)",
            link: "#",
        },
        3: {
            imagem: "img/ICONE-SEM-FUNDO-PRETO.png",
            titulo: "Reflexão Filosófica",
            descricao:
                '"Se todos os nossos infortúnios fossem colocados juntos e, posteriormente, repartidos em partes iguais por cada um de nós, ficaríamos muito felizes se pudéssemos ter apenas, de novo, só os nossos." (Sócrates)',
            link: "#",
        },
    };

    // Adiciona eventos aos cards de projeto
    projetoCards.forEach((card) => {
        card.addEventListener("click", function () {
            const projetoId = this.getAttribute("data-projeto");
            const projeto = projetosData[projetoId];

            if (projeto) {
                projetoImagemGrande.src = projeto.imagem;
                projetoTituloDetalhe.textContent = projeto.titulo;
                projetoDescricao.textContent = projeto.descricao;
                projetoLink.href = projeto.link;

                // Adiciona classe de destaque ao card selecionado
                projetoCards.forEach((c) => c.classList.remove("ativo"));
                this.classList.add("ativo");
            }
        });
    });

    // Ativa o primeiro projeto por padrão
    if (projetoCards.length > 0) {
        projetoCards[0].click();
    }

    // Efeito de scroll para o header
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".cabecalho");
        if (window.scrollY > 100) {
            header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
        } else {
            header.style.boxShadow = "none";
        }
    });

    // Animação de entrada suave para as seções
    const observerOptions = {
        threshold: 0.1,
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, observerOptions);

    document.querySelectorAll(".secao").forEach((section) => {
        observer.observe(section);
    });
});