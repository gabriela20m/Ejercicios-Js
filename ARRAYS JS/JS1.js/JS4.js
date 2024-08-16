//function agregarItemAlFinalDelArray(array, elemento) {
    // Agrega el "elemento" al final del arreglo recibido.
    // Retorna el arreglo.
    // Tu código:
 // }
  
 // module.exports = agregarItemAlFinalDelArray;

 function agregarItemAlFinalDelArray(array, elemento) {
    // Agrega el "elemento" al final del arreglo recibido.
    array.push(elemento);
    
    // Retorna el arreglo.
    return array;
  }
  
  // Ejemplo de uso:
  let ejemploArray = [10, 20, 30, 40];
  console.log(agregarItemAlFinalDelArray(ejemploArray, 50)); // Output: [10, 20, 30, 40, 50]
  
  // Exportar la función (si estás usando Node.js)
  module.exports = agregarItemAlFinalDelArray;
  