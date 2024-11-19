function calcularFizzBuzzDeUnNumero(numero) {
  const divisiblePor3 = numero % 3 === 0;
  const divisiblePor5 = numero % 5 === 0;

  if (divisiblePor3 && divisiblePor5) {
    return "FizzBuzz";
  }
  if (divisiblePor3) {
    return "Fizz";
  }
  if (divisiblePor5) {
    return "Buzz";
  }
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

export { calcularFizzBuzzDeUnNumero, generarSecuenciaFizzBuzz };
