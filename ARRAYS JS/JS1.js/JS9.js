function obtenerElementoAleatorio(array) {
    // Devuelve un elemento aleatorio del arreglo array.
    // PISTA: Usa el método Math.random().
    // Tu código:
 }
 
 module.exports = obtenerElementoAleatorio;

 function obtenerElementoAleatorio(array) {
    // Genera un índice aleatorio basado en la longitud del arreglo.
    const indiceAleatorio = Math.floor(Math.random() * array.length);
  
    // Devuelve el elemento en el índice aleatorio.
    return array[indiceAleatorio];
  }
  
  // Ejemplo de uso:
  let ejemploArray = [10, 20, 30, 40, 50];
  console.log(obtenerElementoAleatorio(ejemploArray)); // Output: Un valor aleatorio del arreglo, como 20 o 50
  
  // Exportar la función (si estás usando Node.js)
  module.exports = obtenerElementoAleatorio;
  