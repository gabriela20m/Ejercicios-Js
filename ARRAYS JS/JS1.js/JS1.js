//function devolverPrimerElemento(array) {
    // Retornar el primer elemento del arreglo recibido.
    // Tu código:
 // }
  
  //module.exports = devolverPrimerElemento;

  function devolverPrimerElemento(array) {
    // Retornar el primer elemento del arreglo recibido.
    return array[0];
  }
  
  // Ejemplo de uso:
  let ejemploArray = [10, 20, 30, 40];
  console.log(devolverPrimerElemento(ejemploArray)); // Output: 10
  
  // Exportar la función (si estás usando Node.js)
  module.exports = devolverPrimerElemento;
  