/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var resultado;
    largo = document.getElementById("Largo").value;
    ancho = document.getElementById("Ancho").value;
    resultado = parseInt(largo) + parseInt(ancho) * 2;
    alert("Se necesita " + resultado * 3 + " Metros de Alambre");
}
function Circulo () 
{
    var radio;
    var resultado;
    radio = document.getElementById("Radio").value;
    resultado = parseInt(radio) * Math.PI * 2;
    alert("Se necesita " + resultado * 3 + " Metros de Alambre");	
}
function Materiales () 
{
    var largo;
    var ancho;
    var resultado;
    largo = document.getElementById("Largo").value;
    ancho = document.getElementById("Ancho").value;
    resultado = parseInt(largo) * parseInt(ancho);
    alert("Se necesitan " + resultado * 2 + " Bolsas de Cemento y " + resultado * 3 + " Bolsas de Cal.");    
}