//function estaEnRango(num) {
    // Retorna true si "num" es menor que 50 y mayor que 20.
    // De lo contrario, retornar false.
    // Tu código:
 // }
  
  //module.exports = estaEnRango;

  function estaEnRango(num) {
    // Define los límites del rango
    const limites = [20, 50];
    
    // Recorre el array de límites para verificar si el número está dentro del rango
    for (let i = 0; i < limites.length; i++) {
      if (i === 0) {
        if (num <= limites[i]) {
          return false; // Si el número es menor o igual al límite inferior, retorna false
        }
      } else {
        if (num >= limites[i]) {
          return false; // Si el número es mayor o igual al límite superior, retorna false
        }
      }
    }
    
    // Si el número está dentro del rango, retorna true
    return true;
  }
  
  module.exports = estaEnRango;
  