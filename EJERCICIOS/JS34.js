// ⛔️ Recuerda que debes utilizar el objeto global "Math".

//function redondearNumero(num) {
    // La función recibe un argumento llamado num el cual es un numero.
    // Debes redondear "num" al entero más próximo y retornarlo.
    // Por ejemplo: 
    // 1.5 ---> 2
    // 0.1 ---> 0
    // Tu código:
 //}
 
//module.exports = redondearNumero;
function redondearNumero(num) {
    return Math.round(num);
  }
  
  module.exports = redondearNumero;
//Ejemplo de prueba


console.log(redondearNumero(1.5)); // 2
console.log(redondearNumero(0.1)); // 0
console.log(redondearNumero(3.7)); // 4
console.log(redondearNumero(-2.3)); // -2
console.log(redondearNumero(-2.5)); // -2
