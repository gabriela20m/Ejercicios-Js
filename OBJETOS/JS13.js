/**///function eliminarPropiedad(objeto, propiedad) {
    // El parámetro "propiedad" es una propiedad del objeto que recibes.
    // Debes eliminarla del objeto y retornarlo finalmente.
    // Tu código:
  //}
  
  //module.exports = eliminarPropiedad;


  function eliminarPropiedad(objeto, propiedad) {
    // Eliminar la propiedad especificada del objeto.
    delete objeto[propiedad];
    
    // Retornar el objeto actualizado.
    return objeto;
}

module.exports = eliminarPropiedad;

const objeto = {
    nombre: 'David',
    edad: 30,
    ocupacion: 'Desarrollador'
};

const objetoActualizado = eliminarPropiedad(objeto, 'edad');

console.log(objetoActualizado); // { nombre: 'David', ocupacion: 'Desarrollador' }
