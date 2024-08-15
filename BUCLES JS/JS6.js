///function tieneTresDigitos(num) {
    // Si el número recibido tiene tres dígitos, retorna true.
    // Caso contrario, retorna false.
    // Tu código:
  //}
  
  //module.exports = tieneTresDigitos;
  function tieneTresDigitos(num) {
    // Convertimos el número a una cadena de texto para verificar su longitud
    const numStr = num.toString();
    
    // Recorre la cadena de texto y verifica si tiene tres dígitos
    for (let i = 0; i < numStr.length; i++) {
      if (numStr.length === 3) {
        return true; // Si la longitud es 3, retorna true
      } else {
        return false; // Si no es 3, retorna false
      }
    }
  }
  
  module.exports = tieneTresDigitos;
  