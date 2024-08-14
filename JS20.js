//function resta(x, y) {
    // La función recibe dos argumentos llamados "x" e "y" que son números.
    // Retorna el resultado de la resta de estos argumentos.
    // Por ejemplo: 
    // 10, 5 ---> 5
    // 5, 5 ---> 0
    // Tu código:
  //}
  
  //module.exports = resta;

  function resta(x, y) {
    return x - y;
  }
  
  module.exports = resta;

//Ejemplo de prueba

console.log(resta(10, 5)); // 5
console.log(resta(5, 5)); // 0
console.log(resta(20, 15)); // 5
console.log(resta(7, 10)); // -3
