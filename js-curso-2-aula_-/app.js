let listaDosNumerosSorteados = []
let quantidadeMaxima = 100;
let numeroSecreto = gerarNúmeroAleatório();
console.log('Número secreto: '+numeroSecreto);
let tentativa = 1

function exibirNaTela(tag, texto) {
    let titulo = document.querySelector(tag);
    titulo.innerHTML = texto;
}

function exibirTextoInicial() {
 exibirNaTela('h1', 'Game do Número Secreto');
 exibirNaTela('p', 'Escolha um número de 1 a 100');
  }
  
  exibirTextoInicial()

 function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log('O botão foi clicado');
    console.log('Número inserido pelo user: '+chute);
    console.log('O chute é igual ao número real?', chute == numeroSecreto);
    if (chute == numeroSecreto) {
      let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa'
      exibirNaTela('p', `Parabéns! Você descobriu o número secreto com ${tentativa} ${palavraTentativa} 😃`);
      document.getElementById('reiniciar').removeAttribute('disabled')

    }
    else if (chute > numeroSecreto) {
      exibirNaTela('p', `Hmm... Pelo visto o número secreto é menor que ${chute} 🤔 `);
    }
    else {
      exibirNaTela('p', `Hmm... Pelo visto o número secreto é maior que ${chute} 🤔`);
    }
    tentativa++
    limparConteúdo()
 }

 function gerarNúmeroAleatório() {
    let numeroSorteado = parseInt(Math.random() * quantidadeMaxima + 1);
    let quantidadeDeElementosDaLista = listaDosNumerosSorteados.length
    
    if (quantidadeDeElementosDaLista == quantidadeMaxima) {
      listaDosNumerosSorteados = []
    }
    
    if (listaDosNumerosSorteados.includes(numeroSorteado)) {
      return gerarNúmeroAleatório();
    }
    else {
      listaDosNumerosSorteados.push(numeroSorteado);
      console.log(listaDosNumerosSorteados)
      return numeroSorteado;
    }
1
 }
 
 function limparConteúdo() {
  let limpeza = document.querySelector('input')
  limpeza.value = ''
 }

 function reiniciarJogo() {
  numeroSecreto = gerarNúmeroAleatório()
  console.log('Novo número secreto: '+numeroSecreto)
  exibirTextoInicial()
  limparConteúdo()
  tentativa = 1
  document.getElementById('reiniciar').setAttribute('disabled', true)
 }
