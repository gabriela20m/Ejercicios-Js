//function operacionMatematica(num1, num2, cb) {
    // En este ejercicio recibirás dos números y un callback.
    // El callback realiza una operación matemática, por lo que necesita de los dos números.
    // Retorna el resultado del callback pasándole por valores los números num1 y num2.
    // Tu código:
 // }
  
 // module.exports = operacionMatematica;

 function operacionMatematica(num1, num2, cb) {
    // El callback realiza una operación matemática usando los dos números.
    // Retornamos el resultado de ejecutar el callback con num1 y num2 como argumentos.
    return cb(num1, num2);
  }
  
  // Ejemplo de uso:
  function sumar(a, b) {
    return a + b;
  }
  
  function multiplicar(a, b) {
    return a * b;
  }
  
  const resultado1 = operacionMatematica(3, 4, sumar); // Devuelve 7
  const resultado2 = operacionMatematica(3, 4, multiplicar); // Devuelve 12
  
  console.log(resultado1); // Imprime 7
  console.log(resultado2); // Imprime 12
  