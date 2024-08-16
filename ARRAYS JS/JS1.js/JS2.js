//function devolverUltimoElemento(array) {
    // Retornar el último elemento del arreglo recibido.
    // Tu código:
  //}
  
 // module.exports = devolverUltimoElemento;

 function devolverUltimoElemento(array) {
  // Retornar el último elemento del arreglo recibido.
  return array[array.length - 1];
}

// Ejemplo de uso:
let ejemploArray = [10, 20, 30, 40];
console.log(devolverUltimoElemento(ejemploArray)); // Output: 40

// Exportar la función (si estás usando Node.js)
module.exports = devolverUltimoElemento;
