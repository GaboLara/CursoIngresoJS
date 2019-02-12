function mostrar()
{
    var precio;
    var descuento;
    var resultado;
    precio = prompt("Ingrese el Precio");
    descuento = prompt("Ingrese el Porcentaje de Descuento");
    resultado = parseInt (precio) - [parseInt (precio) * parseInt (descuento) / 100];
    document.getElementById("elPrecioFinal").value = resultado;
    

}
