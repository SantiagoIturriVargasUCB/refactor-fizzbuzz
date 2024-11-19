function calcularFizzBuzzDeUnNumero(numero) {
  let resultado = "";
  if (numero % 3 === 0 && numero % 5 === 0) {
    resultado = "FizzBuzz";
  } else if (numero % 3 === 0) {
    resultado = "Fizz";
  } else if (numero % 5 === 0) {
    resultado = "Buzz";
  } else {
    resultado = numero.toString();
  }
  return resultado;
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
