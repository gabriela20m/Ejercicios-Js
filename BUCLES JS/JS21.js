//function esPotenciaDeDos(numero) {
    // La función recibe un "numero" por argumento.
    // Determina si es una potencia de 2.
    // Devuelve true si lo es, sino devuelve false.
    // PISTA: Utiliza un bucle while.
    // Tu código:
  //}
  
 // module.exports = esPotenciaDeDos;

 function esPotenciaDeDos(numero) {
    // Verifica si el número es menor o igual a 0, ya que las potencias de 2 son mayores que 0
    if (numero <= 0) {
      return false;
    }
    
    // Usa un bucle while para verificar si el número es una potencia de 2
    while (numero > 1) {
      // Si el número no es divisible por 2, no es una potencia de 2
      if (numero % 2 !== 0) {
        return false;
      }
      // Divide el número por 2 en cada iteración
      numero /= 2;
    }
    
    // Si el número se ha reducido a 1, es una potencia de 2
    return numero === 1;
  }
  
  module.exports = esPotenciaDeDos;
  