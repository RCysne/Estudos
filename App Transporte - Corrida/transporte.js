//function moeda(numero){
//return numero.toFixed(2).replace(".", ",") }

function calcular() {

    let base = 2;
    let distancia = inputDistancia.value; // Capturando os valores do label inputDistancia
    let tempo = inputTempo.value; // capturando os valores do label inputTempo

    let total = base + distancia + tempo;
    //botaoCalcular.innerHTML = 'O total é R$' + moeda(total);
    botaoCalcular.innerHTML = 'O total é R$' + total;
}

