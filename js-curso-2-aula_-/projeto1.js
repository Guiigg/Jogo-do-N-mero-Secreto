alert('Seja bem vindo ao game do número secreto')
let numeroSecreto = parseInt(Math.random() * 10 + 1)
console.log(numeroSecreto)
let numeroEscolhido = 0
let tentativas = 1
while (numeroEscolhido != numeroSecreto) {
    let numeroEscolhido = prompt('Escolha um número de 1 a 100:')
    if (numeroEscolhido == numeroSecreto) {
        break;
    }
    else if (numeroEscolhido < numeroSecreto) {
        alert('Hmm... Pelo visto o número secreto é maior que '+numeroEscolhido)
    }
    else {
        alert('Hmm... Pelo visto o número secreto é menor que '+numeroEscolhido)
    }
    tentativas++
    console.log('Número de tentativas: '+tentativas)
}
    let palavraTentaiva = tentativas > 1 ? 'tentativas' : 'tentativa'
    alert(`Parabéns! Você descobriu o número secreto (${numeroSecreto}) com ${tentativas} ${palavraTentaiva}`)