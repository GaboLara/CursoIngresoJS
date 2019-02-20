function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
  var respuesta='si';
  var suma;
  while(respuesta=="si"){
    suma=prompt("Ingresar número.");
    if (suma>=0) {
    positivo=parseInt(positivo)+parseInt(suma);
    contador++;
    respuesta=prompt("Desea ingresar otro numero? si o no.");
    }
    else {
      if (suma<0) {
        negativo=parseInt(negativo)*parseInt(suma);
        contador++;
        respuesta=prompt("Desea ingresar otro numero? si o no.");
      }
    }
  }


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN
