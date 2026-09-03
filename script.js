

const botaoVerMais = document.getElementById("btn-ver-mais");
const conteudoExtra = document.getElementById("conteudo-extra");

let mostrandoMais = false;

botaoVerMais.addEventListener("click", function () {

    if (mostrandoMais === false) {

        const novoParagrafo = document.createElement("p");

        novoParagrafo.textContent =
            "Estou desenvolvendo projetos para praticar meus conhecimentos e construir meu portfólio profissional.";

        conteudoExtra.appendChild(novoParagrafo);

        botaoVerMais.textContent = "Mostrar menos";

        mostrandoMais = true;

    } else {

        conteudoExtra.innerHTML = "";

        botaoVerMais.textContent = "Conheça mais sobre mim";

        mostrandoMais = false;
    }

});



const botaoEnviar = document.getElementById("btn-enviar");
const mensagemSucesso = document.getElementById("mensagem-sucesso");

botaoEnviar.addEventListener("click", function () {

    mensagemSucesso.textContent = "Enviado com sucesso!";

    setTimeout(function () {
        mensagemSucesso.textContent = "";
    }, 3000);

});
