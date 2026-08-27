
// const botaoVerMais = document.getElementById("btn-ver-mais");

// const conteudoExtra = document.getElementById("conteudo-extra");

// botaoVerMais.addEventListener("click", function () {

//     const novoParagrafo = document.createElement("p");

//     novoParagrafo.textContent =
//         "Estou desenvolvendo projetos para praticar meus conhecimentos e construir meu portfólio profissional.";

//     conteudoExtra.appendChild(novoParagrafo);

// });


// const sobre = document.getElementById("sobre");
// const novoParagrafo = document.createElement("p");
// novoParagrafo.textContent = "Também tenho interesse em acessibilidade e experiência do usuário.";
// sobre.appendChild(novoParagrafo);



//  const botaoEnviar = document.getElementById("btn-enviar");

// const conteudoExtra = document.getElementById("conteudo-extra");

// botaoEnviar.addEventListener("click", function () {

//     const novoParagrafo = document.createElement("p");

//     novoParagrafo.textContent =
//         "Enviado com sucesso!";

//     conteudoExtra.appendChild(novoParagrafo);

// });



//formulario.addEventListener("submit", function(event) {

//    event.preventDefault();

//    console.log("Nome:", nome.value);
//    console.log("E-mail:", email.value);
//    console.log("Assunto:", assunto.value);
//    console.log("Mensagem:", mensagem.value);

//});




// contato.addEventListener("submit", function(event) {

//     event.preventDefault();

//     console.log("nome:", nome.value);
//     console.log("e-mail:", email.value);

// });

// const mensagemSucesso =
//    document.getElementById("mensagem-sucesso");
// mensagemSucesso.textContent = "Mensagem enviada com sucesso!";



let mostrandoMais = false;

botaoVerMais.addEventListener("click", function () {

   if (mostrandoMais === false) {

       const novoParagrafo = document.createElement("p");

        novoParagrafo.textContent =
            "Estou desenvolvendo projetos para praticar meus conhecimentos e construir meu portfólio profissional.";

      conteudoExtra.appendChild(novoParagrafo);

      botaoVerMais.textContent = "Ver menos";

        mostrandoMais = true;

    } else {

        conteudoExtra.innerHTML = "";

        botaoVerMais.textContent = "Ver mais";

        mostrandoMais = false;
    }

});
