function invertirTexto(texto) {
    // La función recibe un argumento "texto" que es un string.
    // Tu objetivo es invertir el string y devolver el string invertido.
    // Tu código:
  }
  
  module.exports = invertirTexto;

  function invertirTexto(texto) {
    // Convertir el string en un arreglo de caracteres, invertir el arreglo y luego volver a unirlo en un string.
    return texto.split('').reverse().join('');
  }
  
  // Ejemplo de uso:
  console.log(invertirTexto('hello')); // Output: 'olleh'
  console.log(invertirTexto('JavaScript')); // Output: 'tpircSavaJ'
  console.log(invertirTexto('12345')); // Output: '54321'
  
  // Exportar la función (si estás usando Node.js)
  module.exports = invertirTexto;
  