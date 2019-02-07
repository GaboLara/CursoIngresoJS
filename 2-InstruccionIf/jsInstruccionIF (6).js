function mostrar()
{
//tomo la edad  
var edad;
edad = document.getElementById("edad").value;
    if (edad>=13 && edad<=17) {
        alert("Es adolecente");
        } 
        else {
            if (edad>=18) {
                alert("Es Mayor de edad");
            }
            else{
                alert("Es niño");
            }
        }


}//FIN DE LA FUNCIÓN