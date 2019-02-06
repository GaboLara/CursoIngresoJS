/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var numUno;
    var numDos;
    var resultado;
    numUno = document.getElementById ("numeroUno").value;
    numDos = document.getElementById ("numeroDos").value;
    resultado = parseInt(numUno) + parseInt(numDos);
    alert (resultado);	
}

function restar()
{
    numUno = document.getElementById ("numeroUno").value;
    numDos = document.getElementById ("numeroDos").value;
    resultado = parseInt(numUno) - parseInt(numDos);
    alert (resultado);	
}

function multiplicar()
{ 
    numUno = document.getElementById ("numeroUno").value;
    numDos = document.getElementById ("numeroDos").value;
    resultado = parseInt(numUno) * parseInt(numDos);
    alert (resultado);	
	
}

function dividir()
{
    numUno = document.getElementById ("numeroUno").value;
    numDos = document.getElementById ("numeroDos").value;
    resultado = parseInt(numUno) / parseInt(numDos);
    alert (resultado);	
	
}

