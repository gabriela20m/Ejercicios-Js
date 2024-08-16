function contarParesConContinue(numeros) {
    // La función recibe un array de numeros por argumento.
    // Devuelve la cantidad de números pares que hay en el array.
    // Evita los impares utilizando continue.
    // Tu código:
  }
  
  module.exports = contarParesConContinue;

  function contarParesConContinue(numeros) {
    // Variable para contar los números pares.
    let cantidadPares = 0;
    
    // Iterar sobre cada número en el arreglo.
    for (let i = 0; i < numeros.length; i++) {
      // Verificar si el número es impar.
      if (numeros[i] % 2 !== 0) {
        continue; // Saltar el número impar y continuar con el siguiente.
      }
      
      // Incrementar el contador de pares si el número es par.
      cantidadPares++;
    }
    
    // Retornar la cantidad de números pares encontrados.
    return cantidadPares;
  }
  
  // Ejemplo de uso:
  let arregloNumeros = [1, 2, 3, 4, 5, 6, 7, 8];
  console.log(contarParesConContinue(arregloNumeros)); // Output: 4
  
  // Exportar la función (si estás usando Node.js)
  module.exports = contarParesConContinue;
  