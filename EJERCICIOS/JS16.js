//function esImpar(num) {
    // La función recibe un argumento llamado num.
    // Retorna true si el argumento "num" es impar.
    // De lo contrario, retorna false.
    // Por ejemplo: 
    // 15 ---> true
    // 14 ---> false
    // Tu código:
 // }
  
  //module.exports = esImpar;

  function esImpar(num) {
    return num % 2 !== 0;
  }
  
  module.exports = esImpar;

//Ejemplo de prueba


console.log(esImpar(15)); // true
console.log(esImpar(14)); // false
console.log(esImpar(0)); // false
console.log(esImpar(-7)); // true
console.log(esImpar(8)); // false
