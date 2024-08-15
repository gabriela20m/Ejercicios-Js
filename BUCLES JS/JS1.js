//function esIgualYNegativo(a, b) {
    // La función recibe dos argumentos "a" y "b" que son números.
    // Determina si son iguales y son ambos negativos.
    // De ser así, retorna true, de lo contrario, retorna false.
    // Tu código:
 // }
  
 // module.exports = esIgualYNegativo

 function esIgualYNegativo(a, b) {
    // Almacena los números en un array
    const numeros = [a, b];
    
    // Recorre el array y verifica si ambos números son iguales y negativos
    for (let i = 0; i < numeros.length; i++) {
      if (numeros[i] >= 0) {
        return false; // Si algún número no es negativo, retorna false
      }
    }
    
    // Si ambos son negativos, verifica si son iguales
    if (numeros[0] === numeros[1]) {
      return true;
    } else {
      return false;
    }
  }
  
  module.exports = esIgualYNegativo;
  