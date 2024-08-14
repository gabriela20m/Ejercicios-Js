//function obtenerAreaRectangulo(alto, ancho) {
    // La función recibe dos argumentos llamados "alto" y "ancho" los cuales son numeros.
    // Retornar el área de un rectángulo teniendo su alto y ancho.
    // Por ejemplo: 
    // 2, 2 ---> 4
    // 0, 2 ---> 2
    // Tu código:
  //}
  
  //module.exports = obtenerAreaRectangulo;

  function obtenerAreaRectangulo(alto, ancho) {
    return alto * ancho;
  }
  
  module.exports = obtenerAreaRectangulo;
  
//Ejemplo de prueba

console.log(obtenerAreaRectangulo(2, 2)); // 4
console.log(obtenerAreaRectangulo(0, 2)); // 0
console.log(obtenerAreaRectangulo(5, 10)); // 50
console.log(obtenerAreaRectangulo(7, 3)); // 21
