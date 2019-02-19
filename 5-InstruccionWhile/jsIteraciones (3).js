function mostrar()
{
var contador = 0;
var clave = prompt("ingrese el número clave.");
while(clave!= "utn750") {
    contador++
    if (contador==3) {
        alert("Ya no puede intentar de nuevo");
        break;
    }
    alert("No es la clave correcta " + contador);
    clave = prompt("ingrese el número clave.");
}
}//FIN DE LA FUNCIÓN
