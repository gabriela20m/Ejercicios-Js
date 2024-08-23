//function verificarPropiedad(objeto, propiedad) {
    // Verifica si el objeto posee la propiedad recibida.
    // Retorna true si la tiene, sino retorna false.
    // PISTA: puedes usar el método hasOwnProperty().
    // Tu código:
// }
 
 //module.exports = verificarPropiedad;


 function verificarPropiedad(objeto, propiedad) {
    // Verifica si el objeto posee la propiedad recibida.
    // Retorna true si la tiene, sino retorna false.
    return objeto.hasOwnProperty(propiedad);
}
 
module.exports = verificarPropiedad;


const objeto = { nombre: 'David', edad: 30 };
const propiedad1 = 'edad';
const propiedad2 = 'altura';

console.log(verificarPropiedad(objeto, propiedad1)); // true
console.log(verificarPropiedad(objeto, propiedad2)); // false
