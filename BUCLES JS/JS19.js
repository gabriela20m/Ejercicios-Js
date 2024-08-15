//function sumarHastaN(n) {
    // La función recibe un número "n" por argumento.
    // Devuelve la suma de todos los números desde 1 hasta n.
    // Tu código:
 // }
  
 // module.exports = sumarHastaN;

 function sumarHastaN(n) {
    let suma = 0;
    
    // Calcula la suma de todos los números desde 1 hasta n (inclusive)
    for (let i = 1; i <= n; i++) {
      suma += i;
    }
    
    return suma;
  }
  
  module.exports = sumarHastaN;
  