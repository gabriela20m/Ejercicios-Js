function esPalindromo(string) {
    // La función recibe un argumento "string".
    // Verifica si este string es palíndromo o no.
    // Retorna true si lo es, caso contrario, retorna false.
    // IMPORTANTE: Un palíndromo es una palabra o frase
    // que se lee igual hacia adelante que hacia atrás.
    // Tu código:
  }
  
  module.exports = esPalindromo;

  function esPalindromo(string) {
    // Normalizar el string eliminando espacios y convirtiendo a minúsculas.
    const textoLimpio = string.replace(/\s+/g, '').toLowerCase();
    
    // Invertir el string limpio.
    const textoInvertido = textoLimpio.split('').reverse().join('');
    
    // Comparar el string limpio con su versión invertida.
    return textoLimpio === textoInvertido;
  }
  
  // Ejemplo de uso:
  console.log(esPalindromo('radar')); // Output: true
  console.log(esPalindromo('hello')); // Output: false
  console.log(esPalindromo('A man a plan a canal Panama')); // Output: true
  console.log(esPalindromo('No lemon, no melon')); // Output: true
  
  // Exportar la función (si estás usando Node.js)
  module.exports = esPalindromo;
  