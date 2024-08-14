//function menosQueNoventa(num) {
    // La función recibe un argumento llamado num.
    // Retorna true si el argumento "num" es menor que noventa.
    // De lo contrario, retorna false.
    // Por ejemplo: 
    // 50 ---> true
    // 91 ---> false
    // Tu código:
  //}
  
 // module.exports = menosQueNoventa;

 function menosQueNoventa(num) {
    return num < 90;
  }
  
  module.exports = menosQueNoventa;

//Ejemplo de prueba

console.log(menosQueNoventa(50)); // true
console.log(menosQueNoventa(91)); // false
console.log(menosQueNoventa(89)); // true
console.log(menosQueNoventa(90)); // false
