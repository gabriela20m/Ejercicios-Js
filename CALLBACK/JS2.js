//function cambiarCadena(string, callback) {
    // Aplica la función de callback al string y devuelve el resultado.
    // La función de callback se encargará de recibir el string y devolverlo con los cambios.
    // Si no se recibe una función callback entonces se debe retornar el string original.
    // Tu código:
 //}
 
 //module.exports = cambiarCadena;

 function cambiarCadena(string, callback) {
    // Verifica si se proporcionó una función de callback.
    if (typeof callback === 'function') {
      // Si el callback es una función, aplícalo al string y devuelve el resultado.
      return callback(string);
    } else {
      // Si no se proporcionó un callback, devuelve el string original.
      return string;
    }
  }
  
  // Ejemplo de uso:
  function convertirMayusculas(cadena) {
    return cadena.toUpperCase();
  }
  
  const resultado1 = cambiarCadena('hola', convertirMayusculas); // Devuelve "HOLA"
  const resultado2 = cambiarCadena('hola'); // Devuelve "hola"
  
  console.log(resultado1); // Imprime "HOLA"
  console.log(resultado2); // Imprime "hola"
  