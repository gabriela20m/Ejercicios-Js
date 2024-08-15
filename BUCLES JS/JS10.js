//function esDiezOCinco(num) {
    // Retornar true si "num" es 10 o 5.
    // De lo contrario, retornar false.
    // Tu código:
  //}
  
  //module.exports = esDiezOCinco;


  function esDiezOCinco(num) {
    // Almacena los valores válidos en un array
    const valoresValidos = [10, 5];
    
    // Recorre el array para verificar si el número es uno de los valores válidos
    for (let i = 0; i < valoresValidos.length; i++) {
      if (num === valoresValidos[i]) {
        return true; // Si el número coincide con uno de los valores válidos, retorna true
      }
    }
    
    // Si no coincide con ningún valor válido, retorna false
    return false;
  }
  
  m
  