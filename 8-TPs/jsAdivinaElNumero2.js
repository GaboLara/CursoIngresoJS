/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
	numeroSecreto = Math.floor(Math.random() * (100-1))+1;
	contadorIntentos = 0;
}

function verificar()
{
	console.log(contadorIntentos++);
	document.getElementById("intentos").value = parseInt(contadorIntentos);
   if ((numeroSecreto == document.getElementById("numero").value) && (contadorIntentos == 1)) {
	alert("Usted es un Psíquico.");
   }
   else {
	   if (numeroSecreto == document.getElementById("numero").value && contadorIntentos == 2){
		   alert("Excelente percepción.");
	   }
	   else {
		   if (numeroSecreto == document.getElementById("numero").value && contadorIntentos == 3){
			   alert("Esto es suerte.");
		   }
		   else {
			   if (numeroSecreto == document.getElementById("numero").value && contadorIntentos == 4) {
				   alert("Excelente técnica.");				   
			   }
			   else {
				   if (numeroSecreto == document.getElementById("numero").value && contadorIntentos == 5) {
					   alert("Usted está en la media.");
				   }
				   else {
					   if ((numeroSecreto == document.getElementById("numero").value) && (contadorIntentos >= 6 && contadorIntentos <= 10)) {
						   alert("Falta técnica.");
					   }
					   else {
						   if (numeroSecreto == document.getElementById("numero").value && contadorIntentos > 10) {
							alert("Afortunado en el amor!!");   
						   }
						   else {
							if (document.getElementById("numero").value < numeroSecreto) {
								alert("Falta para llegar al numero secreto");
							  }
							  else {
								if (document.getElementById("numero").value > numeroSecreto) {
									alert("Se pasó del numero secreto.");
								  }
							  }
						   }
					   }
				   }
			   }
		   }
	   }
   }
}