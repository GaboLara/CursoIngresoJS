function mostrar()
{
    var numero;
    var letra;
    var cantidadpares=0;
    var cantidadceros=0;
    var contadorpositivo=0;
    var cantidadimpares=0;
    var promediopositivos=0;
    var sumanegativos=-0;
    var nummax=-101;
    var letramax;
    var nummin=101;
    var letramin;
    var respuesta=true;
    while(respuesta!=false){
        numero=prompt("Favor de ingresar un numero");
        letra=prompt("Favor de ingresar una letra");
        if (numero>=-100 && numero <=100) {
            if (numero%2==0) {
                cantidadpares++;               
            }
            else { 
                cantidadimpares++;
            }
            if (numero==0) {
                cantidadceros++;
            }
            if (numero>=0 && numero<=100) {
                promediopositivos=promediopositivos+parseInt(numero);
                contadorpositivo++;
            }
            if (numero>=-100 && numero<0) {
                sumanegativos=sumanegativos+parseInt(numero);
            }
            if (nummax<numero) {
                nummax=numero;
                letramax=letra;
            }
            if (nummin>numero) {
                nummin=numero;
                letramin=letra;
            }
        }
        else {
            alert("El numero ingresado no es correcto");
        }
        respuesta = confirm("Desea ingresar mas datos?");
    }
    document.write("La cantidad de numero Pares son: " + cantidadpares + ", La cantidad de números impares son: " + cantidadimpares + ", La cantidad de ceros son: " + cantidadceros + 
    ", El promedio de todos los números positivos ingresados son: " + promediopositivos / contadorpositivo + ", La suma de todos los números negativos son: " + sumanegativos + 
    ", El número y la letra del máximo son: " + nummax + " y " + letramax + " y El número y la letra del mínimo son: " + nummin + " y " + letramin);
}
