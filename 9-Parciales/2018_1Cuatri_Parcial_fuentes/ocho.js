function mostrar()
{
    var numero;
    var letra;
    var confirmar=true;
    var contarpar=0;
    var contarimpar=0;
    var contarceros=0;
    var promediopositivo=0;
    var sumanegativos=0;
    var nummax=-100;
    var letramax;
    var nummin=100;
    var letramin;
    var contador=0;
    var contadorpos=0;
        while(confirmar!=false){
            letra=prompt("Favor de ingresar una letra");
            numero=prompt("Favor de ingresar un numero");
            numero=parseInt(numero);
                //Validar un número entre -100 y 100 
                while(numero<-100||numero>100){
                    alert("El numero ingresado no es valido, ingresar un numero valido");
                    numero=prompt("Favor de ingresar un numero");
                    numero=parseInt(numero);
                }
            //La cantidad de números pares
            if (numero%2==0) {
                contarpar++;
            }
            //La cantidad de números impares  
            else{
                contarimpar++;
            }
            //La cantidad de ceros
            if (numero==0) {
                contarceros++;
            }
            //El promedio de todos los números positivos ingresados
            if (numero>0) {
                promediopositivo=parseInt(promediopositivo)+numero;
                contadorpos++;
            }
            //La suma de todos los números negativos
            if (numero<0) {
                sumanegativos=parseInt(sumanegativos)+numero;
            }
            //El número y la letra del máximo
            if (numero>nummax) {
                nummax=numero;
                letramax=letra;
            }
            //El número y la letra del minimo
            if (numero<nummin) {
                nummin=numero;
                letramin=letra;
            }
            contador++;
            confirmar=confirm("Desea ingresar otro dato?");
        }
        document.write("<br/>La cantidad de números pares son: "+contarpar);
        document.write("<br/>La cantidad de números impares son: "+contarimpar);
        document.write("<br/>La cantidad de ceros son: "+contarceros);
        document.write("<br/>El promedio de todos los números positivos  son: "+promediopositivo/contadorpos);
        document.write("<br/>La suma de todos los números negativos son: "+sumanegativos);
        document.write("<br/>El número y la letra del máximo son: numero: "+nummax+" letra: "+letramax);
        document.write("<br/>El número y la letra del minimo son: numero: "+nummin+" letra: "+letramin);
}