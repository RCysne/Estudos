const btn = document.querySelector('#btn').addEventListener('click', calcular);

function calcular() {
  let peso = Number(document.querySelector('#weight').value);
  let altura = Number(document.querySelector('#height').value);
  let res = document.querySelector('.res');
  let imc = peso / (altura * altura);

  if (imc.toFixed(1) < 14.5) {
    res.textContent = 'Você está desnutrido.';
  }

  if (imc.toFixed(1) >= 14.5 && imc.toFixed(1) < 20) {
    res.textContent = 'Seu peso está abaixo do normal.';
  }

  if (imc.toFixed(1) >= 20 && imc.toFixed(1) < 24.9) {
    res.textContent = 'Seu peso está normal.';
  }

  if (imc.toFixed(1) >= 25 && imc.toFixed(1) < 29.9) {
    res.textContent = 'Você está com sobrepeso.';
  }

  if (imc.toFixed(1) >= 30 && imc.toFixed(1) < 39.9) {
    res.textContent = 'Você está com obesidade.';
  }

  if (imc.toFixed(1) >= 40) {
    res.textContent = 'Você está com obesidade móbida.';
  }
}

document.querySelector('#btnClear').addEventListener('click', clear);

function clear() {
  let peso = (document.querySelector('#weight').value = '');
  let altura = (document.querySelector('#height').value = '');
  let res = (document.querySelector('.res').textContent = '');
}
