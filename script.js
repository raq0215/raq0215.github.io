
const botaoVerMais = document.getElementById("btn-ver-mais");

const conteudoExtra = document.getElementById("conteudo-extra");

botaoVerMais.addEventListener("click", function () {

    const novoParagrafo = document.createElement("p");

    novoParagrafo.textContent =
        "Estou desenvolvendo projetos para praticar meus conhecimentos e construir meu portfólio profissional.";

    conteudoExtra.appendChild(novoParagrafo);

});


