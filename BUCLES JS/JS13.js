//function esEntero(num) {
    // Retorna true si "num" es un entero, ya sea positivo, negativo o cero.
    // Ejemplo: 0.8   ---> false
    // Ejemplo: 1     ---> true
    // Ejemplo: (-10) ---> true
    // De lo contrario, retorna false.
    // Tu código:
 // }
  
  //module.exports = esEntero;

  function esEntero(num) {
    // Define una función para verificar si un número es entero
    function verificarEntero(valor) {
      return valor % 1 === 0; // Verifica si el residuo de la división entre 1 es 0
    }
  
    // Almacena el número a verificar en un array
    const numeros = [num];
  
    // Recorre el array y verifica si el número es entero
    for (let i = 0; i < numeros.length; i++) {
      if (verificarEntero(numeros[i])) {
        return true; // Retorna true si el número es entero
      } else {
        return false; // Retorna false si el número no es entero
      }
    }
  }
  
  module.exports = esEntero;
  