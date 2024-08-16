function convertirStringAMayusculas(array) {
    // Convierte a mayúsculas todos los strings del array.
    // Retorna el arreglo resultante.
    // Tu código:
  }
  
  module.exports = convertirStringAMayusculas;

  function convertirStringAMayusculas(array) {
    // Convierte a mayúsculas todos los strings del array.
    // Retorna el arreglo resultante.
    return array.map(elemento => typeof elemento === 'string' ? elemento.toUpperCase() : elemento);
  }
  
  // Ejemplo de uso:
  let ejemploArray = ["hola", "mundo", 123, "javascript"];
  console.log(convertirStringAMayusculas(ejemploArray)); // Output: ["HOLA", "MUNDO", 123, "JAVASCRIPT"]
  
  // Exportar la función (si estás usando Node.js)
  module.exports = convertirStringAMayusculas;
  