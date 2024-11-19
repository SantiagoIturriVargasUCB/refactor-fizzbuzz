import { calcularFizzBuzzDeUnNumero, generarSecuenciaFizzBuzz } from "./fizzbuzz";

describe("FizzBuzz de un número", () => {
  it("Número sin regla", () => {
    expect(calcularFizzBuzzDeUnNumero(1)).toEqual("1");
  });

  it("Regla de Fizz para 3", () => {
    expect(calcularFizzBuzzDeUnNumero(3)).toEqual("Fizz");
  });

  it("Regla de Buzz para 5", () => {
    expect(calcularFizzBuzzDeUnNumero(5)).toEqual("Buzz");
  });

  it("Regla de Fizz para múltiplos de 3", () => {
    expect(calcularFizzBuzzDeUnNumero(6)).toEqual("Fizz");
    expect(calcularFizzBuzzDeUnNumero(9)).toEqual("Fizz");
  });

  it("Regla de Buzz para múltiplos de 5", () => {
    expect(calcularFizzBuzzDeUnNumero(10)).toEqual("Buzz");
    expect(calcularFizzBuzzDeUnNumero(20)).toEqual("Buzz");
  });

  it("Regla FizzBuzz para múltiplos de 3 y 5", () => {
    expect(calcularFizzBuzzDeUnNumero(15)).toEqual("FizzBuzz");
    expect(calcularFizzBuzzDeUnNumero(30)).toEqual("FizzBuzz");
  });

  describe("FizzBuzz de una secuencia", () => {
    it("Genera la secuencia hasta el número especificado", () => {
      expect(generarSecuenciaFizzBuzz(3)).toEqual("1, 2, Fizz");
      expect(generarSecuenciaFizzBuzz(5)).toEqual("1, 2, Fizz, 4, Buzz");
    });
  });
});
