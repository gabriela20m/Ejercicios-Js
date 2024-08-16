function todosIguales(array) {
    // Si todos los elementos del arreglo son iguales, retornar true.
    // Caso contrario, retornar false.
    // Tu código:
  }
  
  module.exports = todosIguales;

  function todosIguales(array) {
    // Si el arreglo está vacío, consideramos que todos los elementos (ninguno) son iguales.
    if (array.length === 0) return true;
  
    // Compara cada elemento con el primer elemento del arreglo.
    for (let i = 1; i < array.length; i++) {
      if (array[i] !== array[0]) {
        return false; // Si encontramos un elemento diferente, retornamos false.
      }
    }
  
    // Si todos los elementos son iguales, retornamos true.
    return true;
  }
  
  // Ejemplo de uso:
  console.log(todosIguales([1, 1, 1])); // Output: true
  console.log(todosIguales([1, 2, 1])); // Output: false
  console.log(todosIguales([])); // Output: true
  
  // Exportar la función (si estás usando Node.js)
  module.exports = todosIguales;
  