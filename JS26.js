//function obtenerSaludo(nombre) {
    // La función recibe un argumento llamado nombre el cual es un string. 
    // Toma el string "nombre" y concatena otros string en la cadena para que tome la siguiente forma:
    // Ejemplo: "Martin" ---> "Hola Martin!"
    // Retorna el nuevo string. 
    // Tu código:
  //}
  
  //module.exports = obtenerSaludo;

  function obtenerSaludo(nombre) {
    return "Hola " + nombre + "!";
  }
  
  module.exports = obtenerSaludo;

//Ejemplo de prueba

console.log(obtenerSaludo("Martin")); // "Hola Martin!"
console.log(obtenerSaludo("Ana")); // "Hola Ana!"
console.log(obtenerSaludo("Juan")); // "Hola Juan!"
