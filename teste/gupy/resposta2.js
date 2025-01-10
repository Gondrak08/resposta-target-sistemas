function isFibonacci(num) {
  let a = 0,
    b = 1;

  while (a < num) {
    let temp = a + b;
    a = b;
    b = temp;
  }

  return a === num;
}

const numero = 25; // Altere este valor para testar outros números
const resultado = isFibonacci(numero);
resultado
  ? console.log(`O número ${numero} pertence à sequência de Fibonacci.`)
  : console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
