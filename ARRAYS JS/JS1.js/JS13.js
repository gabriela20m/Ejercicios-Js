function filtrarNumerosPares(array) {
    // Devuelve un arreglo solo con los números pares presentes en el array.
    // Tu código:
  }
  
  module.exports = filtrarNumerosPares;
  
  function filtrarNumerosPares(array) {
    // Devuelve un arreglo solo con los números pares presentes en el array.
    return array.filter(elemento => typeof elemento === 'number' && elemento % 2 === 0);
  }
  
  // Ejemplo de uso:
  let ejemploArray = [1, 2, 3, 4, 5, 6, 'texto'];
  console.log(filtrarNumerosPares(ejemploArray)); // Output: [2, 4, 6]
  
  // Exportar la función (si estás usando Node.js)
  module.exports = filtrarNumerosPares;
  