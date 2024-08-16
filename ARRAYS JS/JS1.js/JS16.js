function multiplicarElementosPorIndice(array) {
    // Multiplica cada elemento del array por su índice.
    // Devuelve el nuevo arreglo con los resultados.
    // Tu código:
  }
  
  module.exports = multiplicarElementosPorIndice;

  function multiplicarElementosPorIndice(array) {
    // Multiplica cada elemento del array por su índice.
    // Devuelve el nuevo arreglo con los resultados.
    return array.map((elemento, indice) => elemento * indice);
  }
  
  // Ejemplo de uso:
  let ejemploArray = [10, 20, 30, 40];
  console.log(multiplicarElementosPorIndice(ejemploArray)); // Output: [0, 20, 60, 120]
  
  // Exportar la función (si estás usando Node.js)
  module.exports = multiplicarElementosPorIndice;
  