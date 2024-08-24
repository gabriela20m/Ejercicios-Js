//function sumarArray(arrayOfNumbers, cb) {
    // Recibes un arreglo de números y un callback.
    // Suma todos los números del arreglo.
    // Este resultado debes pasárselo como argumento al callback recibido.
    // NOTA: no debes retornar nada.
    // Tu código:
 //}
 
 //module.exports = sumarArray;

 function sumarArray(arrayOfNumbers, cb) {
    // Suma todos los números del arreglo.
    const sumaTotal = arrayOfNumbers.reduce((acumulador, numero) => acumulador + numero, 0);
    
    // Pasa el resultado de la suma al callback.
    cb(sumaTotal);
  }
  
  // Ejemplo de uso:
  function mostrarResultado(resultado) {
    console.log('La suma de los números es:', resultado);
  }
  
  sumarArray([1, 2, 3, 4, 5], mostrarResultado); // Imprime "La suma de los números es: 15"
  