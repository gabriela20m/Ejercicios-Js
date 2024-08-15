//function esPositivoOInferiorA10(a) {
    // La función recibe un número "a" por parámetro.
    // Retorna true si es positivo y menor que 10.
    // Retorna false en caso contrario.
    // Tu código:
 //}
 
 //module.exports = esPositivoOInferiorA10;

 function esPositivoOInferiorA10(a) {
    // Almacena las condiciones a evaluar en un array
    const condiciones = [a > 0, a < 10];
    
    // Recorre el array para verificar si ambas condiciones son verdaderas
    for (let i = 0; i < condiciones.length; i++) {
      if (!condiciones[i]) {
        return false; // Si alguna condición no se cumple, retorna false
      }
    }
    
    // Si ambas condiciones se cumplen, retorna true
    return true;
  }
  
  module.exports = esPositivoOInferiorA10;
  