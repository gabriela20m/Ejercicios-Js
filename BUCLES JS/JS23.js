//function esNumeroPrimo(numero) {
    // La función recibe un argumento "numero".
    // Determina si este corresponde a un número primo.
    // De ser así, retorna true.
    // De lo contrario, retorna false.
    // IMPORTANTE: Recuerda que un número primo es aquel que
    // solo es divisible por sí mismo y por 1.
    // Tu código:
  //}
  
  //module.exports = esNumeroPrimo;

  function esNumeroPrimo(numero) {
    // Verifica si el número es menor o igual a 1
    if (numero <= 1) {
      return false;
    }
  
    // Recorre desde 2 hasta la raíz cuadrada del número
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      // Si el número es divisible por i, no es primo
      if (numero % i === 0) {
        return false;
      }
    }
  
    // Si no se encontraron divisores, el número es primo
    return true;
  }
  
  module.exports = esNumeroPrimo;
  