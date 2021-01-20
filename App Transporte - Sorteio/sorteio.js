function sorteioApp() {



    let numeroCliente = prompt('Digite seu número da sorte entre 1 e 10.');

    if (numeroCliente < 0 || numeroCliente > 10) {
        let numeroCliente = prompt('Você digitou errado, tente novamente. (1-10)');
    }

    let aleatorio = Math.round(Math.random() * 10);
    console.log(aleatorio);

    let numeroSorte = numeroCliente == aleatorio;

    if (numeroSorte) {
        paragrafoResultado.innerHTML = "PARABÉNS! VOCÊ GANHOU UMA CORRIDA.";
        paragrafoResultado.style.backgroundColor = "red";
        paragrafoResultado.style.color = "white";
    }
    if (!numeroSorte) {
        paragrafoResultado.innerHTML = "Não foi dessa vez. Boa sorte!";
    }
}