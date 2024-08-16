function encontrarIndiceMayor(array) {
    // Encuentra el índice del número más grande en el array de números.
    // Devuelve el valor de este índice.
    // Tu código:
  }
  
  module.exports = encontrarIndiceMayor;

  function encontrarIndiceMayor(array) {
    // Encuentra el índice del número más grande en el array de números.
    if (array.length === 0) return -1; // Retorna -1 si el arreglo está vacío.
  
    let indiceMayor = 0; // Inicializa el índice del mayor elemento en 0.
    
    // Recorre el arreglo para encontrar el índice del número más grande.
    for (let i = 1; i < array.length; i++) {
      if (array[i] > array[indiceMayor]) {
        indiceMayor = i;
      }
    }
    
    // Devuelve el índice del número más grande.
    return indiceMayor;
  }
  
  // Ejemplo de uso:
  let ejemploArray = [10, 20, 30, 25, 15];
  console.log(encontrarIndiceMayor(ejemploArray)); // Output: 2 (índice del número 30)
  
  // Exportar la función (si estás usando Node.js)
  module.exports = encontrarIndiceMayor;
  