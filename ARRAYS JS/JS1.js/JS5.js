//function agregarItemAlComienzoDelArray(array, elemento) {
    // Agrega el "elemento" al comienzo del arreglo recibido.
    // Retorna el arreglo.
    // Tu código:
  //}
  
  //module.exports = agregarItemAlComienzoDelArray;

  function agregarItemAlComienzoDelArray(array, elemento) {
    // Agrega el "elemento" al comienzo del arreglo recibido.
    array.unshift(elemento);
    
    // Retorna el arreglo.
    return array;
  }
  
  // Ejemplo de uso:
  let ejemploArray = [10, 20, 30, 40];
  console.log(agregarItemAlComienzoDelArray(ejemploArray, 5)); // Output: [5, 10, 20, 30, 40]
  
  // Exportar la función (si estás usando Node.js)
  module.exports = agregarItemAlComienzoDelArray;
  