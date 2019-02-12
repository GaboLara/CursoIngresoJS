
function mostrar()
{
    var ancho;
    var largo;
    var perimetro;
    ancho = prompt("Ancho");
    largo = prompt("Largo");
    perimetro = [parseInt(ancho) * 2] * [parseInt(largo) * 2];
    alert("El perimetro es " + perimetro);
}
