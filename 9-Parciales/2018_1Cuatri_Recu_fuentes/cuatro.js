function mostrar()
{
    var libros;
    var valorlibro;
    var descuentouno;
    var descuentodos;
    var formapago;
    libros=prompt("Cuantos libros desea?");
    valorlibro=prompt("Valor del libro");
    descuentouno=parseInt(valorlibro) * 0.9;
    descuentodos=parseInt(valorlibro) * 0.75;
    formapago = prompt("Desea pagar con tarjeta? si o no");
    if ((libros>=2 && valorlibro<=2000) && (formapago=="no")) {
        alert("Usted compro " + libros + " Libros y tiene un 10% de descuento $" + descuentouno);        
    }
    else {
        if ((libros>=2 && valorlibro<=2000) && (formapago=="si")) {
            alert("Usted compro " + libros + " Libros y tiene un 10% de descuento $" + descuentouno + ", mas el 10% de recargo de recargo por pago con tarjeta $" + descuentouno*1.1);            
        }
        else {
            if ((libros>=2 && valorlibro>2000) && (formapago=="no")) {
                alert("Usted compro " + libros + " Libros y tiene un 15% de descuento " + descuentodos);
            }
            else {
                if ((libros>=2 && valorlibro>2000) && (formapago=="si")) {
                    alert("Usted compro " + libros + " Libros y tiene un 15% de descuento $" + descuentodos + ", mas el 10% de recargo por pago con tarjeta $" + descuentodos*1.1);                    
                }
                else {
                    if (libros<2 && formapago=="si") {
                       alert("Usted compro " + libros + " Total a pagar " + valorlibro*1.1);
                    }
                    else {
                        alert("Usted compro " + libros + " Total a pagar " + valorlibro);
                    }
                }
            }
        }
    }
}
