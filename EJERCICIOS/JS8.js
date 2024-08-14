//function esNumeroEntero(numero) {
    // La función recibe un argumento llamado numero.
    // Verifica si este es un número entero o no.
    // Retorna true si lo es, de lo contrario, retorna false.
    // Por ejemplo: 
    // 24 ---> true 
    // -1212 ---> true 
    // 121.212 ---> false 
    // Tu código:
  //}
  
  //module.exports = esNumeroEntero;


  function esNumeroEntero(numero) {
    return Number.isInteger(numero);
  }
  
  module.exports = esNumeroEntero;
  
  //Ejemplo de prueba

console.log(esNumeroEntero(24)); // true
console.log(esNumeroEntero(-1212)); // true
console.log(esNumeroEntero(121.212)); // false
console.log(esNumeroEntero("123")); // false (cadena de texto)
console.log(esNumeroEntero(NaN)); // false
console.log(esNumeroEntero(Infinity)); // false
