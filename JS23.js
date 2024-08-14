//function obtenerResto(x, y) {
    // La función recibe dos argumentos llamados "x" e "y" que son números.
    // Retorna el resultado del resto de la division de estos argumentos.
    // Por ejemplo: 
    // 10, 5 ---> 0
    // 16, 5 ---> 1
    // Tu código:
 // }
  
  //module.exports = obtenerResto;

  function obtenerResto(x, y) {
    if (y === 0) {
      throw new Error("No se puede dividir por cero.");
    }
    return x % y;
  }
  
  module.exports = obtenerResto;
  
 //Ejemplo de prueba

console.log(obtenerResto(10, 5)); // 0
console.log(obtenerResto(16, 5)); // 1
console.log(obtenerResto(25, 4)); // 1
console.log(obtenerResto(13, 3)); // 1
