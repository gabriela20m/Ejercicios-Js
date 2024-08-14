//unction esPar(num) {
    // La función recibe un argumento llamado num.
    // Retorna true si el argumento "num" es par.
    // De lo contrario, retorna false.
    // Por ejemplo: 
    // 14 ---> true
    // 15 ---> false
    // Tu código:
  //}
  
  //module.exports = esPar;

  function esPar(num) {
    return num % 2 === 0;
  }
  
  module.exports = esPar;

//Ejemplo de prueba


console.log(esPar(14)); // true
console.log(esPar(15)); // false
console.log(esPar(0)); // true
console.log(esPar(-4)); // true
console.log(esPar(7)); // false
