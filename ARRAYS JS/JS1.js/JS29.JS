function encontrarNumeroFaltante(numeros) {
    // La función recibe un argumento "numeros" correspondiente a un array de números.
    // Encuentra el número faltante en una secuencia de números enteros consecutivos
    // y retórnalo.
    // Devuelve null si el array es vacío o si no hay números faltantes.
    // Tu código:
  }
  
  module.exports = encontrarNumeroFaltante;

  function encontrarNumeroFaltante(numeros) {
    // Verificar si el arreglo está vacío.
    if (numeros.length === 0) {
      return null;
    }
  
    // Ordenar el arreglo para asegurar que los números están en secuencia.
    numeros.sort((a, b) => a - b);
  
    // Encontrar el número faltante en la secuencia.
    for (let i = 0; i < numeros.length - 1; i++) {
      // Verificar si la diferencia entre números consecutivos es mayor que 1.
      if (numeros[i + 1] !== numeros[i] + 1) {
        // Retornar el número faltante.
        return numeros[i] + 1;
      }
    }
    
    // Retornar null si no hay número faltante.
    return null;
  }
  
  // Ejemplo de uso:
  console.log(encontrarNumeroFaltante([1, 2, 4, 5])); // Output: 3
  console.log(encontrarNumeroFaltante([5, 3, 1, 4])); // Output: 2
  console.log(encontrarNumeroFaltante([1, 2, 3, 4, 5])); // Output: null
  console.log(encontrarNumeroFaltante([])); // Output: null
  
  // Exportar la función (si estás usando Node.js)
  module.exports = encontrarNumeroFaltante;
  