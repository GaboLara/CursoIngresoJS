function mostrar()
{
  var compra;
  var descuento;
  var iva;
  compra = prompt("Valor de la compra");
  descuento = parseInt(compra) * 0.9;
  iva = parseInt(descuento) * 1.21;
  alert("tu compra es de $" + compra + " tenes un descuento del 10% queda en $" + descuento + " , mas el iva es $" + iva);
}
