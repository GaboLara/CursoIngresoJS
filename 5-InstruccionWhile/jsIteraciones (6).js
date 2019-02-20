function mostrar()
{

	var contador=0;
  var acumulador=0;
  var suma;
	while(contador<5){
    suma=prompt("Ingresar un número");
    acumulador=parseInt(acumulador)+parseInt(suma);
		contador++;
	}
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
