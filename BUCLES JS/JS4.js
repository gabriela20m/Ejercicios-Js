//function mayoriaDeEdad(edad) {
    // Determinar si la persona puede ingresar al evento según su edad.
    // Si tiene 18 años o más, retorna el string: "Allowed".
    // Caso contrario: "Not allowed".
    // Tu código:
  //}
  
 // module.exports = mayoriaDeEdad;/

 function mayoriaDeEdad(edad) {
    // Utiliza un bucle para evaluar si la edad es mayor o igual a 18
    const edades = [edad]; // Almacena la edad en un array
    
    // Recorre el array para verificar la edad
    for (let i = 0; i < edades.length; i++) {
      if (edades[i] >= 18) {
        return "Allowed"; // Si la edad es mayor o igual a 18, retorna "Allowed"
      } else {
        return "Not allowed"; // Si la edad es menor a 18, retorna "Not allowed"
      }
    }
  }
  
  module.exports = mayoriaDeEdad;
  