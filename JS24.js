//function agregarSimboloExclamacion(str) {
    // La función recibe un argumento llamado str el cual es un string.
    // Agrega un símbolo de exclamación al final del string str y retórnalo.
    // Por ejemplo: 
    // "hello world" ---> "hello world!"
    // Tu código:
  //}
  
  //module.exports = agregarSimboloExclamacion;

  function agregarSimboloExclamacion(str) {
    return str + '!';
  }
  
  module.exports = agregarSimboloExclamacion;

    
//Ejemplo de prueba

 console.log(agregarSimboloExclamacion("hello world")); // "hello world!"
console.log(agregarSimboloExclamacion("¡Hola!")); // "¡Hola!!"
console.log(agregarSimboloExclamacion("Test")); // "Test!"
