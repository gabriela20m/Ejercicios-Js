//function fizzBuzz(num) {
    // Si "num" es divisible entre 3, retorna "fizz".
    // Si "num" es divisible entre 5, retorna "buzz".
    // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
    // De lo contrario, retorna false.
    // Tu código:
 // }
  
  //module.exports = fizzBuzz;

  function fizzBuzz(num) {
    // Define los posibles resultados en un array
    const resultados = [
      { divisor: 15, mensaje: "fizzbuzz" }, // 15 es el mínimo común múltiplo de 3 y 5
      { divisor: 3, mensaje: "fizz" },
      { divisor: 5, mensaje: "buzz" }
    ];
    
    // Recorre el array de resultados para verificar el número
    for (let i = 0; i < resultados.length; i++) {
      if (num % resultados[i].divisor === 0) {
        return resultados[i].mensaje; // Retorna el mensaje correspondiente al divisor
      }
    }
    
    // Si no se cumple ninguna condición, retorna false
    return false;
  }
  
  module.exports = fizzBuzz;
  
