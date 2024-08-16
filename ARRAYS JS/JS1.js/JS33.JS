function combine(str1, str2, str3) {
    // Esta función debe combinar de forma alternada cada caracter de cada string.
    // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
    // Los strings pueden tener cualquier tamaño.
    // EJEMPLOS
    // combine("abc", "", "123") == "a1b2c3"
    // combine("abc", "12345", "") == "a1b2c345"
    // combine("abc", "12345", "67") == "a16b27c345"
    // Tu código:
  }
  
  module.exports = combine;

  function combine(str1, str2, str3) {
    // Filtrar los strings vacíos y combinarlos en un arreglo.
    const nonEmptyStrings = [str1, str2, str3].filter(str => str.length > 0);
  
    // Determinar la longitud máxima de los strings.
    const maxLength = Math.max(...nonEmptyStrings.map(str => str.length));
  
    let result = '';
  
    // Iterar hasta la longitud máxima para combinar los caracteres.
    for (let i = 0; i < maxLength; i++) {
      for (const str of nonEmptyStrings) {
        if (i < str.length) {
          result += str[i];
        }
      }
    }
  
    return result;
  }
  
  // Ejemplos de uso:
  console.log(combine("abc", "", "123")); // Output: 'a1b2c3'
  console.log(combine("abc", "12345", "")); // Output: 'a1b2c345'
  console.log(combine("abc", "12345", "67")); // Output: 'a16b27c345'
  
  // Exportar la función (si estás usando Node.js)
  module.exports = combine;
  