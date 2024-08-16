function agregarNumeros(arrayOfNums) {
    // Suma todos los elementos de arrayOfNums y retorna el resultado.
    // Tu código:
  }
  
  module.exports = agregarNumeros;

  function agregarNumeros(arrayOfNums) {
    // Suma todos los elementos de arrayOfNums y retorna el resultado.
    return arrayOfNums.reduce((acumulador, numero) => acumulador + numero, 0);
  }
  
  // Ejemplo de uso:
  let ejemploArray = [1, 2, 3, 4, 5];
  console.log(agregarNumeros(ejemploArray)); // Output: 15
  
  // Exportar la función (si estás usando Node.js)
  module.exports = agregarNumeros;
  