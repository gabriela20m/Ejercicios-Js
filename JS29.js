//function areaDelTriangulo(base, altura) {
    // La función recibe dos argumentos llamados "base" y "altura" los cuales son numeros.
    // Retornar el área de un triangulo teniendo su base y altura.
    // Por ejemplo: 
    // 10, 5 ---> 25
    // 0, 10 ---> 0
    // Tu código:
  //}
  
  //module.exports = areaDelTriangulo;
  function areaDelTriangulo(base, altura) {
    return (base * altura) / 2;
  }
  
  module.exports = areaDelTriangulo;

//Ejemplo de prueba

console.log(areaDelTriangulo(10, 5)); // 25
console.log(areaDelTriangulo(0, 10)); // 0
console.log(areaDelTriangulo(7, 8)); // 28
console.log(areaDelTriangulo(12, 6)); // 36
