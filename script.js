// Selecionando os elementos do HTML que vamos usar
const btnVerificar = document.getElementById('btnVerificar');
const divResultado = document.getElementById('resultado');

// Adicionando o evento de clique no botão
btnVerificar.addEventListener('click', function() {
    // Capturando os valores dos campos e convertendo para os tipos corretos
    const nome = document.getElementById('nome').value.trim();
    const idade = parseInt(document.getElementById('idade').value);
    const altura = parseFloat(document.getElementById('altura').value);

    // Validação simples para garantir que todos os campos foram preenchidos
    if (!nome || isNaN(idade) || isNaN(altura)) {
        divResultado.className = "resultado erro";
        divResultado.innerText = "Por favor, preencha todos os campos corretamente.";
        divResultado.style.display = "block";
        return; // Para a execução aqui se houver erro
    }

    // Regra de negócio: Altura >= 1.70 E idade >= 18
    if (altura >= 1.70 && idade >= 18) {
        // Se atender aos critérios
        divResultado.className = "resultado sucesso";
        divResultado.innerText = `Parabéns, ${nome}! Você pode prosseguir no processo para a vaga!`;
    } else {
        // Se NÃO atender aos critérios
        divResultado.className = "resultado erro";
        divResultado.innerText = `Infelizmente você não é apto à vaga.`;
    }

    // Torna a div do resultado visível
    divResultado.style.display = "block";
});