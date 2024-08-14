//function retornarPerimetro(lado) {
    // La función recibe un argumento llamado lado el cual es un numero.
    // Retornar el perimetro de un cuadrado.
    // Por ejemplo: 
    // 2 ---> 8
    // 0 ---> 0
    // Tu código:
 //}
 
 //module.exports = retornarPerimetro;

 function retornarPerimetro(lado) {
    return lado * 4;
  }
  
  module.exports = retornarPerimetro;

//Ejemplo de prueba

console.log(retornarPerimetro(2)); // 8
console.log(retornarPerimetro(0)); // 0
console.log(retornarPerimetro(5)); // 20
console.log(retornarPerimetro(7)); // 28
