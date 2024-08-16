function obtenerPrimerStringLargo(array) {
    // Devuelve el primer string con más de 5 caracteres en el array.
    // Tu código:
  }
  
  module.exports = obtenerPrimerStringLargo;

  function obtenerPrimerStringLargo(array) {
    // Recorre el arreglo buscando el primer string con más de 5 caracteres.
    for (let i = 0; i < array.length; i++) {
      if (typeof array[i] === 'string' && array[i].length > 5) {
        return array[i];
      }
    }
    // Si no encuentra ningún string con más de 5 caracteres, retorna undefined.
    return undefined;
  }
  
  // Ejemplo de uso:
  let ejemploArray = ["hola", "adiós", "javascript", "a", "cadena larga"];
  console.log(obtenerPrimerStringLargo(ejemploArray)); // Output: "javascript"
  
  // Exportar la función (si estás usando Node.js)
  module.exports = obtenerPrimerStringLargo;
  