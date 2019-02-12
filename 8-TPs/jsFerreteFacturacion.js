/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var preciouno;
    var preciodos;
    var preciotres;
    var resultado;
    preciouno = document.getElementById("PrecioUno").value;
    preciodos = document.getElementById("PrecioDos").value;
    preciotres = document.getElementById("PrecioTres").value;
    resultado = parseInt(preciouno) + parseInt(preciodos) + parseInt(preciotres);
    alert("La suma es: " + resultado);	
}
function Promedio () 
{
    preciouno = document.getElementById("PrecioUno").value;
    preciodos = document.getElementById("PrecioDos").value;
    preciotres = document.getElementById("PrecioTres").value;
    resultado = [parseInt(preciouno) + parseInt(preciodos) + parseInt(preciotres)] / 3;
    alert("El promedio es: " + resultado);	
}
function PrecioFinal () 
{
	preciouno = document.getElementById("PrecioUno").value;
    preciodos = document.getElementById("PrecioDos").value;
    preciotres = document.getElementById("PrecioTres").value;
    resultado = [(parseInt(preciouno) + parseInt(preciodos) + parseInt(preciotres)) * 1.21];
    alert("El promedio es: " + resultado);	
}