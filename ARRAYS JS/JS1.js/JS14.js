function contarElementosMayoresA10(array) {
    // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
    // Tu código:
  }
  
  module.exports = contarElementosMayoresA10;

  function contarElementosMayoresA10(array) {
    // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
    return array.filter(elemento => typeof elemento === 'number' && elemento > 10).length;
  }
  
  // Ejemplo de uso:
  let ejemploArray = [5, 15, 20, 8, 12, 'texto'];
  console.log(contarElementosMayoresA10(ejemploArray)); // Output: 3
  
  // Exportar la función (si estás usando Node.js)
  module.exports = contarElementosMayoresA10;
  