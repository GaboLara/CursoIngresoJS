function mostrar()
{
    var numerouno;
    var numerodos;
    var resultado;
    numerouno = prompt ("Ingrese el primer numero");
    numerodos = prompt ("Ingrese el segundo numero");
    if (numerouno == numerodos) {
        alert(numerouno + numerodos);                
        }
          else {
            if (numerouno>numerodos)
             {
            resultado = parseInt(numerouno) - parseInt(numerodos);
                alert(resultado);
             } else {
            resultado = parseInt(numerouno) + parseInt(numerodos);
            if (resultado>10) {
                alert("La suma es " + resultado + " y supero 10");
            }     
                     
                        
                    }
                }
}
            

