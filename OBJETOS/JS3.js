///const agregarNuevaPropiedad = (objeto, propiedad, valor) => {
    // Añade una nueva propiedad al objeto con su respectivo valor pasado por la función.
    // Tu código:
 // };
  
  //module.exports = agregarNuevaPropiedad;

  const agregarNuevaPropiedad = (objeto, propiedad, valor) => {
    // Añade una nueva propiedad al objeto con su respectivo valor pasado por la función.
    objeto[propiedad] = valor; // Se agrega la nueva propiedad con el valor proporcionado.
    return objeto; // Se retorna el objeto actualizado.
};

module.exports = agregarNuevaPropiedad;


const objeto = { nombre: 'David' };
const propiedad = 'edad';
const valor = 30;

const objetoActualizado = agregarNuevaPropiedad(objeto, propiedad, valor);

console.log(objetoActualizado); // { nombre: 'David', edad: 30 }
