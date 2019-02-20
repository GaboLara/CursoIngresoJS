function mostrar()
{

	var contador=0;
	var acumulador=0;
  var respuesta='si';
while(respuesta=="si"){
    suma=prompt("Ingresar un número");
    acumulador=parseInt(acumulador)+parseInt(suma);
    contador++;
    respuesta=prompt("Desea ingresar otro numero? si o no.");
}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
