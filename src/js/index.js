/* 
- Objetivo 1 - Quando o usuário clicar no botão de ir pro próximo
  Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele 
  Passo 2 - identificar o clique no botão 
  Passo 3 - adicionar a classe ativo nos projetos escondidos 

- Objetivo 2 - esconder o botão de mostrar mais 
  Passo 1 - pegar o botão e esconder ele
  */

const botaoVoltar = document.querySelector('btn-voltar');
const botaoAvancar = document.querySelector('btn-avancar');

botaoAvancar.addEventListener('click', () => {
    avancarCartao();
});

botaoVoltar.addEventListener('click', () => {
    voltarCartao();
});

function avancarCartao() {
    botaoMostrarProjetos.classList.add('remover');
}

function voltarCartao() {
    const cartaoAtual = document.querySelector('.cartao.selecionado');

    cartaoAtual.closest('li').nextElementSibling.classList.add('selecionado')
}
