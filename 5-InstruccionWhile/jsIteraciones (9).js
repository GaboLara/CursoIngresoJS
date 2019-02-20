function mostrar()
{

	var contador=0;
	// declarar variables

  var respuesta='si';
  var nummayor=0;
  var nummenor=0;
  var numero;
  var bandera=true;
	while(respuesta!='no'){
    numero=prompt("Ingresar número");
    if (bandera) {
      nummayor=numero;
      nummenor=numero;
      bandera=false;
    }
    else{
    if (numero>=nummayor) {
      nummayor=parseInt(numero);
    }
    else{
      if (numero<=nummenor) {
        nummenor=parseInt(numero);
      }
    }
    }
    contador++;
    respuesta=prompt("Desea ingresar otro numero? si o no.");
  }

  document.getElementById("maximo").value=nummayor;
  document.getElementById("minimo").value=nummenor;
}//FIN DE LA FUNCIÓN
