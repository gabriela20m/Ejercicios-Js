///function agregarPropiedad(objeto, propiedad) {
    // Recibirás un objeto por parámetro.
    // Debes agregarle una propiedad con el nombre recibido por parámetro.
    // Esta propiedad será igual al valor `null`.
    // Retornar el objeto.
    // Tu código:
  //}
  
  //module.exports = agregarPropiedad;

  function agregarPropiedad(objeto, propiedad) {
    // Agregar una nueva propiedad al objeto con el nombre recibido y el valor null.
    objeto[propiedad] = null;
    
    // Retornar el objeto actualizado.
    return objeto;
}

module.exports = agregarPropiedad;


const objeto = { nombre: 'David' };
const nuevaPropiedad = 'edad';

const objetoActualizado = agregarPropiedad(objeto, nuevaPropiedad);

console.log(objetoActualizado); // { nombre: 'David', edad: null }
