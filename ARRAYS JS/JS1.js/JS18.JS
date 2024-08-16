function promedioResultadosTest(resultadosTest) {
    // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
    // Tu código:
  }
  
  module.exports = promedioResultadosTest;

  function promedioResultadosTest(resultadosTest) {
    // Verifica si el arreglo está vacío para evitar división por cero.
    if (resultadosTest.length === 0) return 0;
  
    // Suma todos los elementos del arreglo.
    const suma = resultadosTest.reduce((acumulador, nota) => acumulador + nota, 0);
  
    // Calcula y devuelve el promedio.
    return suma / resultadosTest.length;
  }
  
  // Ejemplo de uso:
  let resultados = [85, 90, 78, 92];
  console.log(promedioResultadosTest(resultados)); // Output: 86.25
  
  // Exportar la función (si estás usando Node.js)
  module.exports = promedioResultadosTest;
  