//function sumarHastaNConBreak(n) {
    // La función recibe un numero n por argumento.
    // Devuelve la suma de todos los números desde 1 hasta n.
    // Si la suma supera a 100, detén el bucle usando break.
    // Tu código:
 //}
 
 //module.exports = sumarHastaNConBreak;

 function sumarHastaNConBreak(n) {
    let suma = 0;
    
    // Bucle que suma los números desde 1 hasta n
    for (let i = 1; i <= n; i++) {
      suma += i;
      
      // Verifica si la suma supera 100
      if (suma > 100) {
        break; // Detiene el bucle si la suma es mayor que 100
      }
    }
    
    return suma;
  }
  
  module.exports = sumarHastaNConBreak;
  