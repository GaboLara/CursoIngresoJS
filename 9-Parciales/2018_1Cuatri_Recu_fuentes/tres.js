function mostrar()
{
    var valorcuenta;
    var cuentatotal;
    var grupoamigos;
    var propina;
    var iva;
    var resultado;
    grupoamigos = prompt("Cantidad de amigos.");
    valorcuenta = prompt("Valor de la cuenta.");
    iva = parseInt(valorcuenta) * 1.21;
    propina = iva * 1.1;
    resultado = propina / parseInt(grupoamigos);
    alert("La cuenta es de " + valorcuenta + " y el 21% de Iva " + iva + " mas el 10% de propina " + propina + " Deben pagar cada uno " + resultado);
}
