//function crearGato(nombre, edad) {
    // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
    // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
    // Además, agregar una propiedad con el nombre "meow".
    // La propiedad "meow" será una función que retorne el string: "Meow!".
    // Retornar el objeto.
    // Tu código:
 // }
  
 // module.exports = crearGato;

 function crearGato(nombre, edad) {
    // Crear un nuevo objeto con las propiedades "nombre" y "edad".
    const gato = {
        nombre: nombre,
        edad: edad,
        // Agregar una propiedad "meow" que es una función que retorna "Meow!".
        meow: function() {
            return "Meow!";
        }
    };
    
    // Retornar el objeto.
    return gato;
}
  
module.exports = crearGato;


const miGato = crearGato("Whiskers", 3);

console.log(miGato.nombre); // "Whiskers"
console.log(miGato.edad);   // 3
console.log(miGato.meow()); // "Meow!"
