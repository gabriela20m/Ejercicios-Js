//function esTipoDato(valor) {
    // La función recibe un argumento llamado valor.
    // Retorna el tipo de dato de este valor.
    // Por ejemplo: "string", "number", "boolean", "object", etc.
    // Tu código:
  //}
  
  //module.exports = esTipoDato;

  function esTipoDato(valor) {
    return typeof valor;
  }
  
  module.exports = esTipoDato;

//Ejemplo de prueba

console.log(esTipoDato("Hola")); // "string"
console.log(esTipoDato(42)); // "number"
console.log(esTipoDato(true)); // "boolean"
console.log(esTipoDato({})); // "object"
console.log(esTipoDato(null)); // "object" (notar que typeof null devuelve "object")
console.log(esTipoDato(undefined)); // "undefined"
