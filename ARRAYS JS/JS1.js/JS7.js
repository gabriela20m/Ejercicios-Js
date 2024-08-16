function ordenarArray(array) {
    // Ordena los elementos del areglo array de menor a mayor.
    // Devuelve el arreglo resultante.
    // Tu código:
  }
  
  module.exports = ordenarArray;

  function ordenarArray(array) {
    // Ordena los elementos del arreglo array de menor a mayor.
    array.sort((a, b) => a - b);
    
    // Devuelve el arreglo resultante.
    return array;
  }
  
  // Ejemplo de uso:
  let ejemploArray = [40, 10, 30, 20];
  console.log(ordenarArray(ejemploArray)); // Output: [10, 20, 30, 40]
  
  // Exportar la función (si estás usando Node.js)
  module.exports = ordenarArray;
  