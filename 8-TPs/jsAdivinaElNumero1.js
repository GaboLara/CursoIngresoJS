/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;
var numeroIngresado;
{
function comenzar()
{
  numeroSecreto = Math.floor(Math.random() * (100-1))+1;
  contadorIntentos = 0;     
  }

	//Genero el número RANDOM entre 1 y 100
	 
		//alert(numeroSecreto );
	

function verificar()
{
  console.log(contadorIntentos ++); 
  document.getElementById("intentos").value = parseInt(contadorIntentos);
  if (document.getElementById("numero").value < numeroSecreto) {
    alert("Falta para llegar al numero secreto");
  }
    else {
      if (document.getElementById("numero").value > numeroSecreto) {
        alert("Se pasó del numero secreto.");
      }
    }
  if (numeroSecreto == document.getElementById("numero").value) {
    alert("Usted es un ganador!!! y en solo " +  contadorIntentos + " intentos");
   }
}
}