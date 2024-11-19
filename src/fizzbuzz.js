function divisiblePor(numero, divisor) {
  return numero % divisor === 0;
}

function calcularFizzBuzzDeUnNumero(numero) {
  const divisiblePor3 = divisiblePor(numero, 3);
  const divisiblePor5 = divisiblePor(numero, 5);

  if (divisiblePor3 && divisiblePor5) return "FizzBuzz";
  if (divisiblePor3) return "Fizz";
  if (divisiblePor5) return "Buzz";
  return numero.toString();
}

function generarSecuenciaFizzBuzz(hastaNumero) {
  let resultadoSecuencia = "";
  for (let i = 1; i <= hastaNumero; i++) {
    resultadoSecuencia += calcularFizzBuzzDeUnNumero(i);
    if (i !== hastaNumero) resultadoSecuencia += ", ";
  }
  return resultadoSecuencia;
}

export { calcularFizzBuzzDeUnNumero, generarSecuenciaFizzBuzz, divisiblePor };
