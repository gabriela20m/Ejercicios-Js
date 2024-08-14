// ⛔️ Recuerda que debes utilizar el objeto global "Math".

//function redondearHaciaArriba(num) {
    // La función recibe un argumento llamado num el cual es un numero.
    // Debes redondear "num" hacia arriba y retórnalo.
    // Por ejemplo: 
    // 2.5 ---> 3
    // 0.1 ---> 1
    // Tu código:
  //}
  
  //module.exports = redondearHaciaArriba

  function redondearHaciaArriba(num) {
    return Math.ceil(num);
  }
  
  module.exports = redondearHaciaArriba;

//Ejemplo de prueba

console.log(redondearHaciaArriba(2.5)); // 3
console.log(redondearHaciaArriba(0.1)); // 1
console.log(redondearHaciaArriba(5.9)); // 6
console.log(redondearHaciaArriba(-1.2)); // -1
console.log(redondearHaciaArriba(-2.8)); // -2

