//function sonIguales(x, y) {
    // La función recibe dos argumentos llamados "x" e "y".
    // Retorna true si "x" e "y" son iguales.
    // De lo contrario, retorna false.
    // Por ejemplo: 
    // 5, 5 ---> true 
    // 5, 8 ---> false 
    // Tu código:
  //}
  
  //module.exports = sonIguales;

  function sonIguales(x, y) {
    return x === y;
  }
  
  module.exports = sonIguales;

//Ejemplo de prueba

console.log(sonIguales(5, 5)); // true
console.log(sonIguales(5, 8)); // false
console.log(sonIguales("texto", "texto")); // true
console.log(sonIguales("texto", "Texto")); // false
console.log(sonIguales(true, false)); // false
