function encontrarElementoRepetido(numeros) {
    // La función recibe un argumento "numeros" que es un array de números.
    // Retorna el primer elemento repetido que se encuentre en el array.
    // Tu código:
  }
  
  module.exports = encontrarElementoRepetido;

  function encontrarElementoRepetido(numeros) {
    // Crear un conjunto para rastrear los elementos que ya hemos visto.
    let visto = new Set();
    
    // Iterar sobre cada número en el arreglo.
    for (let numero of numeros) {
      // Verificar si el número ya está en el conjunto de elementos vistos.
      if (visto.has(numero)) {
        // Retornar el primer número repetido encontrado.
        return numero;
      }
      
      // Agregar el número al conjunto de elementos vistos.
      visto.add(numero);
    }
    
    // Retornar null si no se encuentra ningún elemento repetido.
    return null;
  }
  
  // Ejemplo de uso:
  console.log(encontrarElementoRepetido([1, 2, 3, 4, 5, 2])); // Output: 2
  console.log(encontrarElementoRepetido([5, 1, 2, 3, 4, 5])); // Output: 5
  console.log(encontrarElementoRepetido([1, 2, 3, 4, 5]));   // Output: null
  console.log(encontrarElementoRepetido([]));                // Output: null
  
  // Exportar la función (si estás usando Node.js)
  module.exports = encontrarElementoRepetido;
  