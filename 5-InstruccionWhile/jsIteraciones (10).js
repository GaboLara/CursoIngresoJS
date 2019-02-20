function mostrar()
{

  var contador=0;
  var contadorpost=0;
  var contadorneg=0;
  var contadorceros=0;
  var contadorpares=0;
	//declarar contadores y variables

  var respuesta="si";
  var numero;
  var negativo=0;
  var positivos=0;
	while(respuesta!="no")
	{
    //suma de los negativos
    numero=prompt("Ingrese un número");
    if (numero<0) {
      negativo=parseInt(negativo)+parseInt(numero);
      contadorneg++;
    }
    //Suma de los positivos
    else{
      if (numero>0) {
        positivos=parseInt(positivos)+parseInt(numero);
        contadorpost++;
      }
      else{
        if (numero==0) {
          contadorceros++;
        }
      }
    }
    contador++;
    respuesta=prompt("Desea ingresar otro numero? si o no.");
  }
alert("Suma de Negativos " + negativo + " Cantidad de Negativos " + contadorneg);
alert("Suma de Positivos " + positivos + " Cantidad de Positivos " + contadorpost);
alert("Cantidad de Ceros " + contadorceros);



}//FIN DE LA FUNCIÓN
