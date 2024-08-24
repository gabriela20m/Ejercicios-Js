//function forEach(array, cb) {
    // Recibes un arreglo y un callback.
    // Itera sobre el arreglo y por cada elemento iterado, ejecuta el callback con este valor.
    // Tu código:
  //}
  
  //module.exports = forEach;

  function forEach(array, cb) {
    // Itera sobre el arreglo.
    for (let i = 0; i < array.length; i++) {
      // Ejecuta el callback con el valor actual del arreglo.
      cb(array[i]);
    }
  }
  
  // Ejemplo de uso:
  function imprimirElemento(elemento) {
    console.log('Elemento:', elemento);
  }
  
  forEach([1, 2, 3, 4, 5], imprimirElemento);
  // Imprime:
  // Elemento: 1
  // Elemento: 2
  // Elemento: 3
  // Elemento: 4
  // Elemento: 5
  