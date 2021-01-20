let nome = prompt('Digite seu nome.').toUpperCase();
let idade = prompt('Digite a sua idade.');
let diasVivos = idade * 365;
let diasHora = diasVivos * 24;
let batimentosPH = 75 * 60;
let batimentosPD = batimentosPH * 24;
let batimentosTotal = diasHora * batimentosPD;
document.write(nome, ', seu coração bateu até hoje, ', batimentosTotal, ' vezes.');