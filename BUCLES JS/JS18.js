//function productoEntreNúmeros(a, b) {
    // Dados dos argumentos "a" y "b", devuelve el producto de todos
    // los números entre a y b (inclusive).
    // Tu código:
  //}
  
 // module.exports = productoEntreNúmeros;

 function productoEntreNúmeros(a, b) {
    // Asegura que a sea el menor número y b sea el mayor número
    const inicio = Math.min(a, b);
    const fin = Math.max(a, b);
    
    let producto = 1;
    
    // Calcula el producto de todos los números entre inicio y fin (inclusive)
    for (let i = inicio; i <= fin; i++) {
      producto *= i;
    }
    
    return producto;
  }
  
  module.exports = productoEntreNúmeros;
  