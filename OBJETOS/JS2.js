//function actualizarValorPropiedad(objeto, propiedad, valor) {
    // Actualiza el valor de la propiedad del objeto recibidos en la función.
    // Retorna el objeto actualizado.
    // Tu código:
   // objeto[propiedad] = valor;
    //return objeto;
// }
 
 //module.exports = actualizarValorPropiedad;

 const objeto = { nombre: 'David', edad: 30 };
 const propiedad = 'edad';
 const nuevoValor = 31;
 
 const objetoActualizado = actualizarValorPropiedad(objeto, propiedad, nuevoValor);
 
 console.log(objetoActualizado); // { nombre: 'David', edad: 31 }
 
