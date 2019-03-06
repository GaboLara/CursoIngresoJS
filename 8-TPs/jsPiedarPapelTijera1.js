/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;
var numero;

function comenzar()
{
    eleccionMaquina = Math.floor(Math.random() * (4-1))+1;
    


}//FIN DE LA FUNCIÓN
function piedra()
{
    if (eleccionMaquina==1) {
        alert("EMPATO");
    }
    else{
        if (eleccionMaquina==2) {
            alert("PERDIO");
        }
        else{
            alert("GANO!!");
        }
    }

}//FIN DE LA FUNCIÓN
function papel()
{
    if (eleccionMaquina==1) {
        alert("GANO!!");
    }
    else{
        if (eleccionMaquina==2) {
            alert("EMPATO");
        }
        else{
            alert("PERDIO");
        }
    }
}//FIN DE LA FUNCIÓN
function tijera()
{
    if (eleccionMaquina==1) {
        alert("PERDIO");
    }
    else{
        if (eleccionMaquina==2) {
            alert("GANO!!");
        }
        else{
            alert("EMPATO");
        }
    }

}//FIN DE LA FUNCIÓN