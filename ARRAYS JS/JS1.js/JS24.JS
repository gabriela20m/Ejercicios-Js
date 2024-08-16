function continueStatement(num) {
    // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
    // Guardar cada nuevo valor en un array y retornarlo.
    // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
    // se continúa con la siguiente iteración.
    // PISTA: Utiliza el statement 'continue'.
    // Tu código:
  }
  
  module.exports = continueStatement;

  function continueStatement(num) {
    // Crear un arreglo para guardar los valores.
    let valores = [];
    
    // Iterar un máximo de 10 veces.
    for (let i = 0; i < 10; i++) {
      // Verificar si el número de iteraciones es 5.
      if (i === 5) {
        continue; // Saltar esta iteración y continuar con la siguiente.
      }
      
      // Aumentar num en 2 y agregar el nuevo valor al arreglo.
      num += 2;
      valores.push(num);
    }
    
    // Retornar el arreglo con los valores.
    return valores;
  }
  
  // Ejemplo de uso:
  console.log(continueStatement(0)); // Output: [2, 4, 6, 8, 10, 14, 16, 18, 20, 22]
  
  // Exportar la función (si estás usando Node.js)
  module.exports = continueStatement;
  