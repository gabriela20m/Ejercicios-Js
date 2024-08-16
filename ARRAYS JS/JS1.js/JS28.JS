function esArrayNoVacio(arr) {
    // La función recibe un argumento "arr".
    // Comprueba si este argumento es un array y si tiene al menos un elemento.
    // Si es así, retorna true, de lo contrario, retorna false.
    // Tu código:
  }
  
  module.exports = esArrayNoVacio;

  function esArrayNoVacio(arr) {
    // Verificar si el argumento es un arreglo y si tiene al menos un elemento.
    return Array.isArray(arr) && arr.length > 0;
  }
  
  // Ejemplo de uso:
  console.log(esArrayNoVacio([1, 2, 3])); // Output: true
  console.log(esArrayNoVacio([]));        // Output: false
  console.log(esArrayNoVacio("texto"));   // Output: false
  console.log(esArrayNoVacio(null));      // Output: false
  
  // Exportar la función (si estás usando Node.js)
  module.exports = esArrayNoVacio;
  