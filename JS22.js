//function divide(x, y) {
    // La función recibe dos argumentos llamados "x" e "y" que son números.
    // Retorna el resultado de la division de estos argumentos.
    // Por ejemplo: 
    // 10, 5 ---> 2
    // 5, 5 ---> 1
    // Tu código:
  //}
  
 // module.exports = divide;

 function divide(x, y) {
    if (y === 0) {
      throw new Error("No se puede dividir por cero.");
    }
    return x / y;
  }
  
  module.exports = divide;

//Ejemplo de prueba

console.log(divide(10, 5)); // 2
console.log(divide(5, 5)); // 1
console.log(divide(7, 2)); // 3.5
console.log(divide(-8, 4)); // -2

// Ejemplo con divisor cero (debería lanzar un error)
// console.log(divide(10, 0)); // Error: No se puede dividir por cero.
