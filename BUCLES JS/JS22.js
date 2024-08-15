//function doWhile(num) {
    // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
    // Retorna el valor final.
    // PISTA: Utiliza el bucle do-while.
    // Tu código:
  //}
  
  //module.exports = doWhile;

  function doWhile(num) {
    let contador = 0;
  
    // Usa un bucle do-while para aumentar num en 5 hasta un máximo de 8 veces
    do {
      num += 5;      // Aumenta num en 5
      contador++;    // Incrementa el contador
    } while (contador < 8); // Repite mientras el contador sea menor que 8
  
    return num;
  }
  
  module.exports = doWhile;
  