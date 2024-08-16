function encontrarPrimerMultiploDeN(n, secuencia) {
    // La función recibe un numero "n" y un array de números "secuencia" como argumentos.
    // Devuelve el primer múltiplo de n que encuentres en la secuencia de números.
    // Usa un break para detener el bucle una vez halles el múltiplo.
    // Tu código:
  }
  
  module.exports = encontrarPrimerMultiploDeN;

  function encontrarPrimerMultiploDeN(n, secuencia) {
    // Iterar sobre cada número en el arreglo secuencia.
    for (let i = 0; i < secuencia.length; i++) {
      // Verificar si el número actual es un múltiplo de n.
      if (secuencia[i] % n === 0) {
        // Retornar el primer múltiplo encontrado.
        return secuencia[i];
      }
    }
    
    // Retornar null si no se encuentra ningún múltiplo.
    return null;
  }
  
  // Ejemplo de uso:
  let secuencia = [5, 12, 18, 22, 25];
  console.log(encontrarPrimerMultiploDeN(6, secuencia)); // Output: 18
  console.log(encontrarPrimerMultiploDeN(7, secuencia)); // Output: null
  
  // Exportar la función (si estás usando Node.js)
  module.exports = encontrarPrimerMultiploDeN;
  