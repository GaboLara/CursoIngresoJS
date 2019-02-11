function mostrar()
{
//tomo la edad  
var edad;
edad = document.getElementById("edad").value;
    if (edad<13) {
        alert("Es un niño");
        } 
    else {
        if (edad>17) {
            alert("Es Mayor de edad");
     }
        else{
        alert("Es adolecente");
    }
}
}//FIN DE LA FUNCIÓN