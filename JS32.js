// ⛔️ Recuerda que debes utilizar el objeto global "Math".

//function elevarAlCubo(num) {
    // La función recibe un argumento llamado num el cual es un numero.
    // Debes Retorna el valor de "num" elevado al cubo.
    // Por ejemplo: 
    // 3 ---> 27
    // 0 ---> 0
    // Tu código:
  //}
  
 // module.exports = elevarAlCubo;

 function elevarAlCubo(num) {
    return Math.pow(num, 3);
  }
  
  module.exports = elevarAlCubo;

  //SIN OPERADOR
  //function elevarAlCubo(num) {
  //  return num ** 3;
  //}
  
  //module.exports = elevarAlCubo;


//Ejemplo de prueba

  console.log(elevarAlCubo(3)); // 27
console.log(elevarAlCubo(0)); // 0
console.log(elevarAlCubo(2)); // 8
console.log(elevarAlCubo(-4)); // -64

  