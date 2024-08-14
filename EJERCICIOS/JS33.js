// ⛔️ Recuerda que debes utilizar el objeto global "Math".

//function elevar(num, exponent) {
    // La función recibe dos argumentos llamados "num" y "exponent" los cuales son numeros.
    // Debes Retorna el valor de "num" elevado al "exponent".
    // Por ejemplo: 
    // 2, 2 ---> 4
    // 0, 5 ---> 0
    // Tu código:
  //}
  
  //module.exports = elevar;

  function elevar(num, exponent) {
    return Math.pow(num, exponent);
  }
  
  module.exports = elevar;

//Ejemplo de prueba

  console.log(elevar(2, 2)); // 4
console.log(elevar(0, 5)); // 0
console.log(elevar(3, 3)); // 27
console.log(elevar(5, 0)); // 1
console.log(elevar(2, -1)); // 0.5

  