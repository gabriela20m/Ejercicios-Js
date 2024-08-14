//function suma(x, y) {
    // La función recibe dos argumentos llamados "x" e "y" que son números.
    // Retorna el resultado de la suma de estos argumentos.
    // Por ejemplo: 
    // 5, 5 ---> 10
    // -5, 5 ---> 0
    // Tu código:
  //}
  
  //module.exports = suma; 

  function suma(x, y) {
    return x + y;
  }
  
  module.exports = suma;

//Ejemplo de prueba

console.log(suma(5, 5)); // 10
console.log(suma(-5, 5)); // 0
console.log(suma(10, -3)); // 7
console.log(suma(0, 0)); // 0
