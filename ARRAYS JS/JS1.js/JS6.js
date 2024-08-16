//function invertirArray(array) {
    // Invierte el arreglo array recibido por argumento.
 // }
  
 // module.exports = invertirArray;

 function invertirArray(array) {
    // Invierte el arreglo array recibido por argumento.
    return array.reverse();
  }
  
  // Ejemplo de uso:
  let ejemploArray = [10, 20, 30, 40];
  console.log(invertirArray(ejemploArray)); // Output: [40, 30, 20, 10]
  
  // Exportar la función (si estás usando Node.js)
  module.exports = invertirArray;
  