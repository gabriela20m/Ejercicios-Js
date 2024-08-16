function duplicarElementos(array) {
    // Duplica (multiplica x2) cada elemento del array de números.
    // Devuelve un array con los duplicados.
    // Tu código:
  }
  
  module.exports = duplicarElementos;

  function duplicarElementos(array) {
    // Duplica (multiplica x2) cada elemento del array de números.
    // Devuelve un array con los duplicados.
    return array.map(elemento => elemento * 2);
  }
  
  // Ejemplo de uso:
  let ejemploArray = [1, 2, 3, 4];
  console.log(duplicarElementos(ejemploArray)); // Output: [2, 4, 6, 8]
  
  // Exportar la función (si estás usando Node.js)
  module.exports = duplicarElementos;
  