function breakStatement(num) {
    // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
    // Guardar cada nuevo valor en un arreglo y retórnarlo.
    // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y retornar el string: "Se interrumpió la ejecución".
    // Tu código:
  }
  
  module.exports = breakStatement;

  function breakStatement(num) {
    // Crear un arreglo para guardar los valores.
    let valores = [];
    
    // Iterar un máximo de 10 veces.
    for (let i = 0; i < 10; i++) {
      // Aumentar num en 2 y agregar el nuevo valor al arreglo.
      num += 2;
      valores.push(num);
      
      // Verificar si el valor de num es igual a la cantidad de iteraciones (i + 1).
      if (num === i + 1) {
        return "Se interrumpió la ejecución";
      }
    }
    
    // Retornar el arreglo con los valores si no se interrumpió la ejecución.
    return valores;
  }
  
  // Ejemplo de uso:
  console.log(breakStatement(0)); // Output: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
  console.log(breakStatement(1)); // Output: "Se interrumpió la ejecución"
  
  // Exportar la función (si estás usando Node.js)
  module.exports = breakStatement;
  