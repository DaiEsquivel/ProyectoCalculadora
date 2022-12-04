const displayValorAnterior = document.getElementById(valorAnterior);
const displayValorValorActual = document.getElementById(valorActual);
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

const calculadora = new Calculadora();

console.log(calculadora.sumar(5,10))
console.log(calculadora.restar(5,10))
console.log(calculadora.dividir(5,10))
console.log(calculadora.multiplicar(5,10))