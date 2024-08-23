function agregarMetodoCalculoDescuento(objetoProducto) {
    // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
    // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
    // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
    // Luego debes restar del precio total del producto ese valor de descuento.
    // Retornar el precio final.
    // Ejemplo:
    // Precio ---> 10
    // PorcentajeDeDescuento ---> 0.2
    // Precio final ---> 8
    // Tu código:
  }
  
  module.exports = agregarMetodoCalculoDescuento;

  function agregarMetodoCalculoDescuento(objetoProducto) {
    // Agregar el método "calcularPrecioDescuento" al objeto "objetoProducto".
    objetoProducto.calcularPrecioDescuento = function() {
        // Obtener el valor del descuento.
        const descuento = this.precio * this.porcentajeDeDescuento;
        
        // Calcular el precio final restando el descuento del precio original.
        const precioFinal = this.precio - descuento;
        
        // Retornar el precio final.
        return precioFinal;
    };
    
    // Retornar el objeto actualizado con el nuevo método.
    return objetoProducto;
}

module.exports = agregarMetodoCalculoDescuento;


const producto = {
    precio: 10,
    porcentajeDeDescuento: 0.2
};

agregarMetodoCalculoDescuento(producto);

console.log(producto.calcularPrecioDescuento()); // 8
