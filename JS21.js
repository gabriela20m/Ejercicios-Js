///function multiplica(x, y) {
  // La función recibe dos argumentos llamados "x" e "y" que son números.
  // Retorna el resultado de la multiplicacion de estos argumentos.
  // Por ejemplo: 
  // 10, 5 ---> 50
  // 5, 5 ---> 25
  // Tu código:
//}

//module.exports = multiplica;

function multiplica(x, y) {
  return x * y;
}

module.exports = multiplica;

//Ejemplo de prueba

console.log(multiplica(10, 5)); // 50
console.log(multiplica(5, 5)); // 25
console.log(multiplica(7, 3)); // 21
console.log(multiplica(-4, 6)); // -24
