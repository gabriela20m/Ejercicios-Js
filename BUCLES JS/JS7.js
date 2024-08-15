//function esParYDivisiblePorTres(a) {
    // La función recibe un número "a" por argumento.
    // Retorna true si este es par y divisible por tres a la vez.
    // Retorna false si no lo es.
    // Tu código:
  //}
  
  //module.exports = esParYDivisiblePorTres;

  function esParYDivisiblePorTres(a) {
    // Almacena las condiciones a evaluar en un array
    const condiciones = [(a % 2 === 0), (a % 3 === 0)];
    
    // Recorre el array para verificar si ambas condiciones son verdaderas
    for (let i = 0; i < condiciones.length; i++) {
      if (!condiciones[i]) {
        return false; // Si alguna condición no se cumple, retorna false
      }
    }
    
    // Si ambas condiciones se cumplen, retorna true
    return true;
  }
  
  module.exports = esParYDivisiblePorTres;
  