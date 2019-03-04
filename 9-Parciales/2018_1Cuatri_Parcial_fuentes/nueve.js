function mostrar()
{
    var marca;
    var peso=0;
    var temperatura;
    var respuesta=true;
    var contadortemp=0;
    var pesomaximo=0;
    var marcamaspesado;
    var cantidadproductoscero=0;
    var promediopeso=0;
    var contadorpeso=0;
    var pesominimo=101;
    while(respuesta!=false){
        marca=prompt("Favor de ingresar la marca del producto.");
        peso=prompt("Favor de ingresar el peso del producto.");
        temperatura=prompt("Favor de ingresar la temperatura del producto.");
        if (peso>=1 && peso<=100) {
            if (temperatura>=-30&&temperatura<=30) {
                if (temperatura%2==0) {
                    contadortemp++;                
                }
                if (temperatura<=0) {
                    cantidadproductoscero++;
                }
            }
            else {
                alert("La temperatura ingresada no es valida.");
                continue;
            }
            promediopeso=parseInt(promediopeso)+parseInt(peso);
            contadorpeso++;
            if (peso>=pesomaximo) {
                pesomaximo=parseInt(peso);
                marcamaspesado=marca;
            }
            if (peso<=pesominimo) {
                pesominimo=parseInt(peso);
            }
        }
        else {
            alert("El peso ingresado no es valido.");
        }
        respuesta=confirm("Desea ingresar un nuevo producto?");
    }
    document.write("<br/>La cantidad de temperaturas pares son: " + contadortemp);
    document.write("<br/>La marca del producto más pesado es: " + marcamaspesado);
    document.write("<br/>La cantidad de productos que se conservan a menos de 0 grados son: " + cantidadproductoscero);
    document.write("<br/>El promedio del peso de todos los productos son: " + promediopeso/contadorpeso);
    document.write("<br/>El peso máximo es: " + pesomaximo);
    document.write("<br/>El peso minimo es: " + pesominimo);
}
