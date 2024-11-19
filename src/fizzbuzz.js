function calcularFizzBuzzDeUnNumero(numero) {
  if (numero % 3 === 0 && numero % 5 === 0) {
    return "FizzBuzz";
  }
  if (numero % 3 === 0) {
    return "Fizz";
  }
  if (numero % 5 === 0) {
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
