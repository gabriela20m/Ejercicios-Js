function dePalabrasAFrase(palabras) {
    // El argumento "palabras" es un arreglo de strings.
    // Retorna un string donde todas las palabras estén concatenadas,
    // con un espacio entre cada palabra.
    // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
    // Tu código:
  }
  
  module.exports = dePalabrasAFrase;

  function dePalabrasAFrase(palabras) {
    // Usar el método join para concatenar los elementos del arreglo con un espacio entre ellos.
    return palabras.join(' ');
  }
  
  // Ejemplo de uso:
  let arregloPalabras = ['Hello', 'world!'];
  console.log(dePalabrasAFrase(arregloPalabras)); // Output: 'Hello world!'
  
  // Exportar la función (si estás usando Node.js)
  module.exports = dePalabrasAFrase;
  