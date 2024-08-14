//function esPositivo(num) {
    // La función recibe un argumento llamado num el cual es un numero entero.
    // Retorna como resultado un string que indica si el número es positivo o negativo.
    // Por ejemplo: 
    // Si el número es positivo ---> "Es positivo".
    // Si el número es negativo ---> "Es negativo".
    // Si el número es 0, devuelve false.
    // Tu código:
  ///}
  
  //module.exports = esPositivo;


  function esPositivo(num) {
    if (num > 0) {
      return "Es positivo";
    } else if (num < 0) {
      return "Es negativo";
    } else {
      return false;
    }
  }
  
  module.exports = esPositivo;
  
//Ejemplo de prueba

console.log(esPositivo(10)); // "Es positivo"
console.log(esPositivo(-5)); // "Es negativo"
console.log(esPositivo(0)); // false
